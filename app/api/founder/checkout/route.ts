import DodoPayments from "dodopayments";
import { NextRequest, NextResponse } from "next/server";
import { getRequestUser } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const user = await getRequestUser(request);
  if (!user) {
    return NextResponse.json({ error: "Sign in before joining Founder." }, { status: 401 });
  }
  if (user.plan === "founder") {
    return NextResponse.json({ alreadyFounder: true });
  }

  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return NextResponse.json({ error: "Enter a valid receipt email." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Enter a valid receipt email." }, { status: 400 });
  }

  const apiKey = process.env.DODO_PAYMENTS_API_KEY;
  const productId = process.env.DODO_FOUNDER_PRODUCT_ID;
  if (!apiKey || !productId) {
    return NextResponse.json(
      { error: "Founder checkout is being connected. Try again shortly." },
      { status: 503 }
    );
  }

  try {
    const dodo = new DodoPayments({
      bearerToken: apiKey,
      environment:
        process.env.DODO_PAYMENTS_ENVIRONMENT === "test_mode"
          ? "test_mode"
          : "live_mode",
    });
    const founderProduct = await dodo.products.retrieve(productId);
    const founderPrice = founderProduct.price;
    const discountBasisPoints =
      founderPrice.discount_bps ?? (founderPrice.discount ?? 0) * 100;
    const effectivePrice =
      founderPrice.type === "one_time_price"
        ? Math.round(founderPrice.price * (10_000 - discountBasisPoints) / 10_000)
        : null;

    if (
      founderPrice.type !== "one_time_price" ||
      founderPrice.currency !== "USD" ||
      effectivePrice !== 499
    ) {
      console.warn("Founder checkout paused because the Dodo product price is not $4.99 USD.");
      return NextResponse.json(
        { error: "Founder checkout is updating to $4.99. Try again shortly." },
        { status: 503 }
      );
    }

    const session = await dodo.checkoutSessions.create({
      product_cart: [{ product_id: productId, quantity: 1 }],
      customer: { email, name: user.handle },
      billing_currency: "USD",
      return_url: `${request.nextUrl.origin}/account?founder=processing`,
      cancel_url: `${request.nextUrl.origin}/founder?checkout=cancelled`,
      metadata: {
        chessgrind_user_id: user.id,
        chessgrind_handle: user.handle,
        chessgrind_plan: "founder-year",
      },
      customization: { theme: "dark", show_order_details: true },
      feature_flags: {
        allow_currency_selection: false,
        allow_customer_editing_email: true,
        allow_customer_editing_name: true,
        allow_discount_code: false,
        allow_phone_number_collection: false,
        allow_tax_id: false,
        redirect_immediately: true,
        single_page: true,
      },
      short_link: true,
    });

    if (!session.checkout_url) {
      throw new Error("Dodo checkout session did not return a URL.");
    }

    return NextResponse.json({ checkoutUrl: session.checkout_url });
  } catch (error) {
    console.error("Dodo checkout session creation failed", error);
    return NextResponse.json(
      { error: "Could not open checkout. Please try again." },
      { status: 502 }
    );
  }
}
