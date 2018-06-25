import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Config } from "./config";

@Injectable()
export class HttpService {
    constructor(public http: Http, public config: Config) {
    }

    get() {

        return this.http.get(this.config.API_URL);
    }

    post(resource, data) { // que pour le log + subscribe
        return this.http.post(this.config.API_LOG_URL + resource, data);
    }

    questions(nb = 20, difficulte = 'easy', categorie = 0) {
        var url = this.config.API_QUESTIONS_URL + '?amount=' + nb + '&difficulty=' + difficulte;
       // alert(url);
       
        if (categorie != 0) {
            url = url + '&category=' + categorie;
        }

        return this.http.get(url);
    }

    envoyerScore(data) {
        var url = this.config.API_POST_URL;
        return this.http.post(url, data);
    }
}
