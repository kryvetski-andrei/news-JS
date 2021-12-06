import { Article } from '../../controller/interfaces';
import './news.css';

class News {
    draw(data: Article | never[]) {
        console.log(data, 'data from News') //(20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        console.log(news, 'news from News') //(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] 
        
        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');
        

        console.log(fragment, 'fragment document.createDocumentFragment() from News') //#document-fragment
        console.log(newsItemTemp, 'newsItemTemp document.querySelector(#newsItemTemp) from News') //<template id="newsItemTemp"></template>

        news.forEach((item, idx) => {

            /** item
              0:
                author: "Simon Zetlitz Nessler, VG"
                content: "(Manchester United Crystal Palace 10) Manchester Uniteds midlertidige manager Ralf Rangnick (63) kunne juble for tre poeng i sin første kamp i sjefsstolen. \r\nSist oppdatert nå nettopp\r\nJUBEL: Fred om… [+2238 chars]"
                description: "(Manchester United – Crystal Palace 1–0) Manchester Uniteds midlertidige manager Ralf Rangnick (63) kunne juble for tre poeng i sin første kamp i sjefsstolen."
                publishedAt: "2021-12-05T15:54:20Z"
                source: {id: 'aftenposten', name: 'Aftenposten'}
                title: "Perlemål ga Rangnick perfekt start i Manchester United"
                url: "https://www.aftenposten.no/sport/fotball/i/a7qvEL/freds-perlemaal-ga-rangnick-perfekt-start-i-manchester-united"
                urlToImage: "https://premium.vgc.no/v2/images/fc6da2bd-950f-4ec3-bbdc-1f8e7e5fb3dd?fit=crop&format  
            */
                
            const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true);
            console.log(typeof newsClone, 'newsClone newsItemTemp.content.cloneNode(true) from News ') //object #document-fragment
            if (idx % 2) (<HTMLElement>newsClone.querySelector('.news__item')).classList.add('alt');

            (<HTMLElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (<HTMLElement>newsClone.querySelector('.news__meta-author')).textContent = item.author || item.source.name;
            (<HTMLElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (<HTMLElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
            (<HTMLElement>newsClone.querySelector('.news__description-source')).textContent = item.source.name;
            (<HTMLElement>newsClone.querySelector('.news__description-content')).textContent = item.description;
            (<HTMLElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (<HTMLElement>document.querySelector('.news')).innerHTML = '';
        (<HTMLElement>document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
