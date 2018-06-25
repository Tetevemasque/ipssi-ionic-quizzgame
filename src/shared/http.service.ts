import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Config } from "./config";

@Injectable()
export class HttpService {
    constructor(public http: Http, public config: Config) {
    }

    get(resource) {
        return this.http.get(this.config.API_URL + resource);
    }

    post(resource, data) {
        return this.http.post(this.config.API_URL + resource, data);
    }
}
