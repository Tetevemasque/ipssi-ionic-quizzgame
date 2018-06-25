import { Injectable } from "@angular/core";
import { Score } from "./models";
//import scores from './mock';
import { HttpService } from "../shared/http.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ScoresService {
    subject: Subject<Array<Score>> = new Subject();

    constructor(public httpService: HttpService) {

    }

    loadScores() {
        this
            .httpService
            .get()
            .subscribe(response => {
                this.subject.next(response.json())
            },
            error => this.subject.error(error.json())
        )
    }

    addScore(score: Score) {
        // this.scores.push(score);
    }
}