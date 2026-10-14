import { NextRequest, NextResponse } from "next/server";
import { getRequestUser, grantFounderAccess } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FOUNDER_PRICE_PAISE = 79_900;

function accountRedirect(request: NextRequest, query: string) {
  return NextResponse.redirect(new URL(`/account?${query}`, request.url));
}

export async function GET(request: NextRequest) {
  const paymentLinkId = request.nextUrl.searchParams.get("razorpay_payment_link_id");
  if (!paymentLinkId || !/^plink_[A-Za-z0-9]+$/.test(paymentLinkId)) {
    return accountRedirect(request, "founder=invalid");
  }

  const user = await getRequestUser(request);
  if (!user) {
    const returnPath = `${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(
      new URL(`/account?payment=pending&next=${encodeURIComponent(returnPath)}`, request.url)
    );
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return accountRedirect(request, "founder=unavailable");

  const response = await fetch(
    `https://api.razorpay.com/v1/payment_links/${paymentLinkId}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
      },
      cache: "no-store",
    }
  );
  if (!response.ok) return accountRedirect(request, "founder=verify-failed");

  const paymentLink = (await response.json()) as {
    status?: string;
    amount?: number;
    amount_paid?: number;
    currency?: string;
    notes?: Record<string, string> | null;
  };
  const valid =
    paymentLink.status === "paid" &&
    paymentLink.amount === FOUNDER_PRICE_PAISE &&
    paymentLink.amount_paid === FOUNDER_PRICE_PAISE &&
    paymentLink.currency === "INR" &&
    paymentLink.notes?.chessgrind_user_id === user.id &&
    paymentLink.notes?.chessgrind_plan === "founder-year";

  if (!valid) return accountRedirect(request, "founder=verify-failed");

  await grantFounderAccess(user.id, paymentLinkId);
  return accountRedirect(request, "founder=active");
}
