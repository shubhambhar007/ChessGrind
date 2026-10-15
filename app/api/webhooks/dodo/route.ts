import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "standardwebhooks";
import { grantFounderAccess } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type DodoPaymentSucceededEvent = {
  type: "payment.succeeded";
  data: {
    payment_id: string;
    currency: string;
    total_amount: number;
    metadata?: Record<string, string | number | boolean>;
    product_cart?: Array<{ product_id: string; quantity: number }> | null;
  };
};

function isPaymentSucceededEvent(value: unknown): value is DodoPaymentSucceededEvent {
  if (!value || typeof value !== "object") return false;
  const event = value as { type?: unknown; data?: unknown };
  return event.type === "payment.succeeded" && !!event.data && typeof event.data === "object";
}

export async function POST(request: NextRequest) {
  const webhookKey = process.env.DODO_PAYMENTS_WEBHOOK_KEY;
  if (!webhookKey) {
    console.error("Dodo webhook received without DODO_PAYMENTS_WEBHOOK_KEY configured.");
    return NextResponse.json({ error: "Webhook unavailable." }, { status: 503 });
  }

  const rawBody = await request.text();
  const headers = {
    "webhook-id": request.headers.get("webhook-id") ?? "",
    "webhook-signature": request.headers.get("webhook-signature") ?? "",
    "webhook-timestamp": request.headers.get("webhook-timestamp") ?? "",
  };

  let event: unknown;
  try {
    event = new Webhook(webhookKey).verify(rawBody, headers);
  } catch (error) {
    console.warn("Rejected invalid Dodo webhook", error);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (!isPaymentSucceededEvent(event)) {
    return NextResponse.json({ received: true });
  }

  const payment = event.data;
  const productId = process.env.DODO_FOUNDER_PRODUCT_ID;
  const purchasedFounderProduct = payment.product_cart?.some(
    (item) => item.product_id === productId && item.quantity === 1
  );
  const userId = payment.metadata?.chessgrind_user_id;
  const isFounderPurchase = payment.metadata?.chessgrind_plan === "founder-year";

  if (
    !productId ||
    !purchasedFounderProduct ||
    typeof userId !== "string" ||
    !isFounderPurchase ||
    payment.currency !== "USD" ||
    payment.total_amount < 590 ||
    !/^pay_[A-Za-z0-9]+$/.test(payment.payment_id)
  ) {
    console.error("Rejected mismatched Dodo Founder payment", payment.payment_id);
    return NextResponse.json({ error: "Payment did not match Founder." }, { status: 400 });
  }

  await grantFounderAccess(userId, payment.payment_id);
  return NextResponse.json({ received: true });
}
