import { IData, INews, ISources } from '../controller/controller';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }
    //data: {status: string, totalResults: number, articles: {author: string, content: string, description: string, publishedAt: string,  source: {id: string, name: string}, title: string, url: string, urlToImage: string}[]}
    //data: {status: string, sources:{category: string, country: string, description: string, id: string, language: string, name: string, url: string}[]}
    drawNews(data: INews | undefined) { //{}
        //data: {status: 'ok', totalResults: 3538, articles: Array(20)} 
        const values = data?.articles ? data?.articles : []; 
        this.news.draw(values);  //values: (20) [{…}, {…}, {…}, {…}...]
    }

    drawSources(data: ISources | undefined) {
        //data: {status: 'ok', sources: Array(128)}
        const values = data?.sources ? data?.sources : [];
        console.log(values, typeof values, 'VVVVVVVVVVVVVVVVVVVVVVVVVVVVVALVE')
        this.sources.draw(values);  //values: (128) [{…}, {…}, {…}, {…}...]
    }
}

export default AppView;
