import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
      }
//(data: { status: string; totalResults: number; articles: { author: string; content: string; description: string; publishedAt: string; source: { id: string; name: string; }; title: string; url: string; urlToImage: string; }[]; }
//(data: { status: string; sources: { category: string; country: string; description: string; id: string; language: string; name: string; url: string; }[]; }
    start() {
        (<HTMLElement>document.querySelector('.sources'))
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => {

              return this.view.drawNews(data);
            }));
            this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
