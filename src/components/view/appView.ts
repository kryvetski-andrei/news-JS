import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: {status: string, totalResults: number, articles: {author: string, content: string, description: string, publishedAt: string,  source: {id: string, name: string}, title: string, url: string, urlToImage: string}[]}) { //{}
        //data: {status: 'ok', totalResults: 3538, articles: Array(20)} 
        const values = data?.articles ? data?.articles : []; 
        console.log(data.articles, 'data.articles')
        this.news.draw(values);  //values: (20) [{…}, {…}, {…}, {…}...]
    }

    drawSources(data: {status: string, sources: Array<object>}) {
        //data: {status: 'ok', sources: Array(128)}
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);  //values: (128) [{…}, {…}, {…}, {…}...]
    }
}

export default AppView;
