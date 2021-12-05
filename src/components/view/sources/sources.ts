import './sources.css';

class Sources {
    draw(data: {category: string, country: string, description: string, id: string, language: string, name: string, url: string}[]) {
      console.log(data, 'data from sources')
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

            (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (<HTMLElement>document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
