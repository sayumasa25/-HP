import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メールアドレスの簡単なバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // Gmail SMTP設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // メール内容
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `【くつの橋本商店】お問い合わせ: ${subject}`,
      html: `
        <h2>お問い合わせを受信しました</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold; width: 120px;">お名前</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold;">メールアドレス</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${email}</td>
          </tr>
          ${company ? `
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold;">会社名・団体名</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${company}</td>
          </tr>
          ` : ''}
          ${phone ? `
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold;">電話番号</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${phone}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold;">お問い合わせ種別</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${subject}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold;">お問い合わせ内容</td>
            <td style="border: 1px solid #ddd; padding: 12px; white-space: pre-wrap;">${message}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold;">送信日時</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${new Date().toLocaleString('ja-JP')}</td>
          </tr>
        </table>
      `,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    console.log('お問い合わせメールを送信しました:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString()
    });

    // 成功レスポンス
    return NextResponse.json(
      { message: 'お問い合わせを受け付けました' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました。しばらく時間をおいて再度お試しください。' },
      { status: 500 }
    );
  }
}
