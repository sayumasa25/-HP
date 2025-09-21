import { createClient } from "microcms-js-sdk";

// 環境変数の確認
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

// microCMSクライアントの初期化（環境変数が設定されている場合のみ）
export const client = serviceDomain && apiKey ? createClient({
  serviceDomain,
  apiKey,
}) : null;

// ヒーロー画像の型定義（シンプル版）
export interface HeroImage {
  backgroundImage: {
    url: string;
    height: number;
    width: number;
  };
}

// コレクションの型定義
export interface Collection {
  id: string;
  name: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  link: string;
}

// ニュース記事の型定義（シンプル版）
export interface NewsItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
}

// イベントの型定義
export interface EventItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  location?: string;
}

// コンテンツブロック一覧取得
export const getContentBlocks = async () => {
  if (!client) {
    console.warn("microCMS client not initialized - returning empty array");
    return [];
  }
  try {
    const data = await client.get({
      endpoint: "contentBlocks",
    });
    return data.contents;
  } catch (error) {
    console.error("Failed to fetch content blocks:", error);
    return [];
  }
};

// ニュース一覧取得
export const getNews = async (): Promise<NewsItem[]> => {
  if (!client) {
    console.warn("microCMS client not initialized - returning empty array");
    return [];
  }
  try {
    const data = await client.get({
      endpoint: "news",
    });
    return data.contents as NewsItem[];
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
};

// イベント一覧取得（contentBlocksから）
export const getEvents = async () => {
  try {
    const data = await getContentBlocks();
    return data.filter((item: any) => item.type === "event");
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }
};

// ヒーロー画像取得（シンプル版）
export const getHeroImage = async (): Promise<HeroImage | null> => {
  if (!client) {
    console.warn("microCMS client not initialized - returning null");
    return null;
  }
  try {
    const data = await client.get({
      endpoint: "hero-image",
    });
    return data as HeroImage;
  } catch (error) {
    console.error("Failed to fetch hero image:", error);
    return null;
  }
};

// コレクション一覧取得
export const getCollections = async (): Promise<Collection[]> => {
  if (!client) {
    console.warn("microCMS client not initialized - returning empty array");
    return [];
  }
  try {
    const data = await client.get({
      endpoint: "collections",
    });
    return data.contents as Collection[];
  } catch (error) {
    console.error("Failed to fetch collections:", error);
    return [];
  }
};

// 個別ニュース取得
export const getNewsById = async (id: string): Promise<NewsItem | null> => {
  if (!client) {
    console.warn("microCMS client not initialized - returning null");
    return null;
  }
  try {
    const data = await client.get({
      endpoint: "news",
      contentId: id,
    });
    return data as NewsItem;
  } catch (error) {
    console.error("Failed to fetch news item:", error);
    return null;
  }
};

// 個別イベント取得
export const getEventById = async (id: string) => {
  if (!client) {
    console.warn("microCMS client not initialized - returning null");
    return null;
  }
  try {
    const data = await client.get({
      endpoint: "events",
      contentId: id,
    });
    return data as EventItem;
  } catch (error) {
    console.error("Failed to fetch event item:", error);
    return null;
  }
};
