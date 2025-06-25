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
  const mock = [
    { id: 1, date: "2025-09-01", title: "AW25 受注会", excerpt: "場所: 東京展示会場" },
    { id: 2, date: "2026-02-10", title: "SS26 プレゼン", excerpt: "場所: 大阪ショールーム" },
  ];
  res.json(mock);
});

app.get("/api/news", async (_, res) => {
  const mock = [
    { id: 1, date: "2025-05-20", title: "新ブランド 33 1/3 r.p.m. 発表", excerpt: "サステナブル素材採用" },
  ];
  res.json(mock);
});

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
