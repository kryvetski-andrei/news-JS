export interface INews {
  articles: IArticle;
  status: string;
  totalResults: number;
}

export type IArticle = [{
  author: string; 
  content: string; 
  description: string; 
  publishedAt: string; 
  source: Source;
  title: string; 
  url: string; 
  urlToImage: string; 
}]

export type Source = {
  id: string; 
  name: string; 
}

export type ISources = {
  status: string;
  sources?: ISource;
}

export type ISource = [{
  category: string; 
  country: string; 
  description: string; 
  id: string; 
  language: string; 
  name: string; 
  url: string; 
}]

export interface IData {
  articles: IArticle;
  sources: ISource;
}

export type CallbackType <T> = (data?: T) => void