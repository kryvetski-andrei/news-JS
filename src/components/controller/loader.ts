import { CallbackType, IData, INews, ISources} from "./controller";


//{body: ReadableStream<Uint8Array> | null, bodyUsed: boolean, headers: Headers, ok: boolean, redirected: boolean, status: number, statusText: string, type: ResponseType, url: string, json(): Promise<string>}

export type Some = {
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
}


class Loader {
    baseLink: string;
    options: {apiKey: string}
    constructor(baseLink: string, options: {apiKey: string}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint = '', options = {} },
        callback: CallbackType<INews> | CallbackType<ISources> = (): void => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Some) {
        console.log(res, 'reeeeeeees')
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options = {}, endpoint = '') {
      console.log(options, 'optiooooooooooooons')
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        (Object.keys(urlOptions) as Array<keyof typeof urlOptions>).forEach((key) => {
            url += `${key}=${(urlOptions[key])}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: CallbackType<INews> | CallbackType<ISources>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));

            
    }
}

export default Loader;
