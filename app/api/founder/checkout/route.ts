import { NextRequest, NextResponse } from "next/server";
import { getRequestUser } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FOUNDER_PRICE_PAISE = 79_900;

export async function POST(request: NextRequest) {
  const user = await getRequestUser(request);
  if (!user) {
    return NextResponse.json({ error: "Sign in before joining Founder." }, { status: 401 });
  }
  if (user.plan === "founder") {
    return NextResponse.json({ alreadyFounder: true });
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return NextResponse.json(
      { error: "Founder checkout is being connected. Try again shortly." },
      { status: 503 }
    );
  }

  const referenceId = `cg-${user.id.slice(0, 12)}-${Date.now().toString(36)}`;
  const response = await fetch("https://api.razorpay.com/v1/payment_links", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: FOUNDER_PRICE_PAISE,
      currency: "INR",
      accept_partial: false,
      reference_id: referenceId,
      description: "ChessGrind Founder — one year",
      customer: { name: user.handle },
      notify: { sms: false, email: false },
      reminder_enable: false,
      callback_url: `${request.nextUrl.origin}/api/founder/confirm`,
      callback_method: "get",
      notes: {
        chessgrind_user_id: user.id,
        chessgrind_handle: user.handle,
        chessgrind_plan: "founder-year",
      },
    }),
    cache: "no-store",
  });

  const payload = (await response.json()) as {
    short_url?: string;
    error?: { description?: string };
  };
  if (!response.ok || !payload.short_url) {
    console.error("Razorpay payment link creation failed", response.status, payload.error);
    return NextResponse.json(
      { error: "Could not open checkout. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ checkoutUrl: payload.short_url });
}
