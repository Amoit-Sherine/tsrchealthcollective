import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  organization?: string;
  email?: string;
  topic?: string;
  message?: string;
  website?: string;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const FROM_ADDRESS = "noreply@tsrchealth.com";
const TO_ADDRESS = "info@tsrchealth.com";
const SUBJECT = "New inquiry from TSRC website";

const normalize = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const name = normalize(payload?.name);
  const organization = normalize(payload?.organization);
  const email = normalize(payload?.email);
  const topic = normalize(payload?.topic) || "General inquiry";
  const message = normalize(payload?.message);
  const website = normalize(payload?.website);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name) {
    return NextResponse.json(
      { ok: false, error: "Full name is required." },
      { status: 400 }
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 }
    );
  }

  if (!message) {
    return NextResponse.json(
      { ok: false, error: "Message is required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  console.log("[contact] RESEND_API_KEY defined:", Boolean(apiKey));
  console.log("[contact] VERCEL_ENV:", process.env.VERCEL_ENV);
  console.log("[contact] NODE_ENV:", process.env.NODE_ENV);
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Missing RESEND_API_KEY." },
      { status: 500 }
    );
  }

  const textBody = [
    "New inquiry received from TSRC website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "-"}`,
    `Topic: ${topic || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlBody = `
    <h2>New inquiry received from TSRC website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(organization || "-")}</p>
    <p><strong>Topic:</strong> ${escapeHtml(topic || "-")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const resendResponse = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      subject: SUBJECT,
      text: textBody,
      html: htmlBody,
      headers: {
        "Reply-To": email,
      },
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.json().catch(() => ({}));
    const errorMessage =
      errorBody?.message ||
      errorBody?.error?.message ||
      "Unable to send the inquiry email. Please try again later.";
    return NextResponse.json(
      {
        ok: false,
        error: errorMessage,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
