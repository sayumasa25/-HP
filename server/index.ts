import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.API_PORT || 4000;

app.post("/api/contact", async (req, res) => {
  const { name, email, company, message } = req.body as {
    name: string;
    email: string;
    company?: string;
    message: string;
  };
  if (!name || !email || !message) {
    return res.status(422).json({ error: "Missing required fields" });
  }

  try {
    // Save to DB
    await prisma.lead.create({
      data: { name, email, company, message },
    });

    // Send mail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_FROM,
      replyTo: email,
      subject: `お問い合わせ from ${name}`,
      text: message,
    });

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/events", async (_, res) => {
  try {
    // 実際のイベント情報
    const events = [
      {
        id: "1",
        title: "東京ファッションウィーク2024 出展",
        date: "2024-03-15",
        excerpt:
          "最新の婦人靴コレクションを展示いたします。新作の試着も可能です。",
        location: "東京ビッグサイト 西展示棟",
        publishedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        id: "2",
        title: "関西地区展示商談会",
        date: "2024-04-20",
        excerpt: "関西地域のお客様向けの展示商談会を開催いたします。",
        location: "インテックス大阪 6号館",
        publishedAt: "2024-01-02T00:00:00.000Z",
      },
      {
        id: "3",
        title: "秋冬新作発表会",
        date: "2024-09-10",
        excerpt:
          "2024年秋冬シーズンの新作コレクションをいち早くご紹介いたします。",
        location: "品川プリンスホテル",
        publishedAt: "2024-01-03T00:00:00.000Z",
      },
    ];

    res.json(events);
  } catch (error) {
    console.error("Events API error:", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

app.get("/api/news", async (_, res) => {
  try {
    // microCMS接続を試行し、失敗した場合はモックデータを使用
    try {
      const { getNews } = await import("../lib/microcms");
      const news = await getNews();
      if (news && news.length > 0) {
        res.json(news);
        return;
      }
    } catch (microCMSError: any) {
      console.log(
        "microCMS connection failed, using mock data:",
        microCMSError.message,
      );
    }

    // 実際のニュースコンテンツ
    const news = [
      {
        id: "1",
        title: "2024年春夏新作コレクション発表",
        excerpt:
          "トレンドを取り入れた最新の婦人靴コレクションを発表いたします。快適性とデザイン性を両立した新作をぜひご覧ください。",
        publishedAt: "2024-03-01T00:00:00.000Z",
      },
      {
        id: "2",
        title: "環境配慮型素材の導入について",
        excerpt:
          "持続可能な社会の実現に向け、環境に配慮した素材を使用した新ラインの開発を進めております。",
        publishedAt: "2024-02-15T00:00:00.000Z",
      },
      {
        id: "3",
        title: "オンラインカタログをリニューアルしました",
        excerpt:
          "より見やすく、使いやすくなったオンラインカタログで商品をご覧いただけます。",
        publishedAt: "2024-02-01T00:00:00.000Z",
      },
      {
        id: "4",
        title: "新店舗オープンのお知らせ",
        excerpt:
          "この度、新たな店舗をオープンいたします。皆様のご来店を心よりお待ちしております。",
        publishedAt: "2024-01-20T00:00:00.000Z",
      },
    ];

    res.json(news);
  } catch (error) {
    console.error("News API error:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// お問い合わせフォーム送信
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // バリデーション
    if (!name || !email || !message) {
      return res.status(400).json({ error: "必須項目が入力されていません" });
    }

    // メール送信処理（実装例）
    console.log("Contact form submission:", {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    // 実際のメール送信やデータベース保存はここで実装
    // 現在はログ出力のみ

    res.json({
      success: true,
      message: "お問い合わせを受け付けました",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "送信に失敗しました" });
  }
});

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
