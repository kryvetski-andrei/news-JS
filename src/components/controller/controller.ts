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

import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: CallbackType<ISources>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback 
        );
    }

    getNews(e: Event, callback: CallbackType<INews>) {

        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = <string>target.getAttribute('data-source-id');
                console.log(typeof sourceId, 'soooooooooooooooouscceIIIIIIIIIDDDDD')
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
