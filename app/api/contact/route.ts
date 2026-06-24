import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
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

    const { data, error } = await resend.emails.send({
      from: "くつの橋本商店 お問い合わせ <onboarding@resend.dev>",
      to: ["m-hashimoto1125@outlook.jp"],
      replyTo: email,
      subject: `【お問い合わせ】${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 8px;">
            くつの橋本商店 お問い合わせ
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 30%; border: 1px solid #ddd;">お名前</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">メールアドレス</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">会社名・団体名</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
            </tr>` : ""}
            ${phone ? `
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">電話番号</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">件名</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd; vertical-align: top;">お問い合わせ内容</td>
              <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">送信日時</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString("ja-JP")}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #666; font-size: 12px;">
            ※このメールは自動送信されています。返信先は ${email} になります。
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

    console.log("お問い合わせメールを送信しました:", { name, email, subject, id: data?.id });

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
