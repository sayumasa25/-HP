import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

import { verifyRecaptchaToken } from "@/lib/recaptcha";

const MAX_REQUEST_BYTES = 64 * 1024;
const FIELD_LIMITS = {
  name: 100,
  email: 254,
  company: 150,
  phone: 50,
  subject: 100,
  message: 5000,
} as const;

function getText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { error: "送信内容が大きすぎます" },
        { status: 413 },
      );
    }

    const body = (await request.json()) as Record<string, unknown>;
    const name = getText(body.name);
    const email = getText(body.email);
    const company = getText(body.company);
    const phone = getText(body.phone);
    const subject = getText(body.subject);
    const message = getText(body.message);
    const recaptchaToken = getText(body.recaptchaToken);

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 },
      );
    }

    const fields = { name, email, company, phone, subject, message };
    const hasOversizedField = Object.entries(FIELD_LIMITS).some(
      ([field, limit]) => fields[field as keyof typeof fields].length > limit,
    );
    if (hasOversizedField) {
      return NextResponse.json(
        { error: "入力内容が長すぎます" },
        { status: 400 },
      );
    }

    // メールアドレスの簡単なバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 },
      );
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const remoteIp = forwardedFor?.split(",")[0]?.trim();
    const isHuman = await verifyRecaptchaToken({
      token: recaptchaToken,
      remoteIp,
    });
    if (!isHuman) {
      return NextResponse.json(
        {
          error:
            "reCAPTCHA認証を確認できませんでした。もう一度お試しください。",
        },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "メール送信を利用できません" },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);
    const mailSubject = subject.replace(/[\r\n]+/g, " ");

    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ??
        "くつの橋本商店 お問い合わせ <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL ?? "m-hashimoto1125@outlook.jp"],
      replyTo: email,
      subject: `【お問い合わせ】${mailSubject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 8px;">
            くつの橋本商店 お問い合わせ
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 30%; border: 1px solid #ddd;">お名前</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">メールアドレス</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            ${
              company
                ? `
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">会社名・団体名</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${safeCompany}</td>
            </tr>`
                : ""
            }
            ${
              phone
                ? `
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">電話番号</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${safePhone}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">件名</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${safeSubject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd; vertical-align: top;">お問い合わせ内容</td>
              <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${safeMessage}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">送信日時</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #666; font-size: 12px;">
            ※このメールは自動送信されています。返信先は ${safeEmail} になります。
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "メール送信に失敗しました" },
        { status: 500 },
      );
    }

    console.log("お問い合わせメールを送信しました:", { id: data?.id });

    return NextResponse.json(
      { message: "お問い合わせを受け付けました" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 },
    );
  }
}
