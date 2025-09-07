import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

// ニュース記事の型定義
export interface NewsItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  excerpt?: string;
  thumbnail?: {
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
  try {
    const data = await client.get({
      endpoint: 'contentBlocks',
    });
    return data.contents;
  } catch (error) {
    console.error('Failed to fetch content blocks:', error);
    return [];
  }
};

// ニュース一覧取得（contentBlocksから）
export const getNews = async () => {
  try {
    const data = await getContentBlocks();
    return data.filter((item: any) => item.type === 'news');
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return [];
  }
};

// イベント一覧取得（contentBlocksから）
export const getEvents = async () => {
  try {
    const data = await getContentBlocks();
    return data.filter((item: any) => item.type === 'event');
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return [];
  }
};

// 個別ニュース取得
export const getNewsById = async (id: string) => {
  try {
    const data = await client.get({
      endpoint: 'news',
      contentId: id,
    });
    return data as NewsItem;
  } catch (error) {
    console.error('Failed to fetch news item:', error);
    return null;
  }
};

// 個別イベント取得
export const getEventById = async (id: string) => {
  try {
    const data = await client.get({
      endpoint: 'events',
      contentId: id,
    });
    return data as EventItem;
  } catch (error) {
    console.error('Failed to fetch event item:', error);
    return null;
  }
};
