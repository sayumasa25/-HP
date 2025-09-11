# Hashimoto Shoes – Corporate & B2B Showcase Site

> 広島から婦人靴を発信する専門商社

このリポジトリは、株式会社橋本商事のコーポレート & B2B サイトのソースコードです。Next.js 14 (App Router) と Express API を採用し、フロントエンドとバックエンドを同一リポジトリで管理しています。

## 🛠️ 開発環境 / Development Setup

```bash
# 1. Install dependencies (依存関係をインストール)
pnpm install # または yarn / npm

# 2. Generate Prisma client & migrate
pnpm prisma generate
pnpm prisma migrate dev --name init

# 3. Copy env file
cp .env.example .env.local

# 4. Start dev servers (frontend & backend)
# Frontend (Next.js)
pnpm dev
# Backend (Express API)
pnpm server
```

フロントエンドは `http://localhost:3000`、API サーバーは `http://localhost:4000` で起動します。

### Scripts

- `pnpm dev` – Next.js dev server
- `pnpm server` – Express API (ts-node)
- `pnpm test` – Vitest + React Testing Library
- `pnpm lint` – ESLint & Prettier check

## 🚀 Deploy

Vercel へのデプロイを推奨しています。`vercel.json` が含まれていますので、自動的にビルド & デプロイされます。

---

# ENGLISH

This repository contains the full-stack code for Hashimoto Shoes corporate & B2B showcase site.

## Quick Start

1. `pnpm install`
2. `pnpm prisma generate && pnpm prisma migrate dev --name init`
3. `cp .env.example .env.local` and fill in SMTP creds
4. `pnpm dev` to start Next.js, `pnpm server` to start Express API

Visit `http://localhost:3000` for frontend, `http://localhost:4000` for API.

Enjoy coding! 🎉
