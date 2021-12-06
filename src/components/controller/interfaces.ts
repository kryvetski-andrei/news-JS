export interface IData {
  articles: Article;
  sources: Source;
}

export interface INews {
  articles: Article;
  status: string;
  totalResults: number;
}

export interface ISources {
  status: string;
  sources?: Source;
}

export type Response = {
  body: ReadableStream<Uint8Array> | null;
  bodyUsed: boolean;
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: ResponseType;
  url: string;
  json(): Promise<INews>;
};

export type Article = [
  {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
      id: string;
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }
];

export type Source = [
  {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
  }
];

export type CallbackType<T> = (data?: T) => void;
