import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'da321c78ab6b48518e38b78758b2dbb6',
        });
    }
}

export default AppLoader;
