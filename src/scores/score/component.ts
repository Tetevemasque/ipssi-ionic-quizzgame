import { Component, Input, OnInit } from "@angular/core";
import { Score } from "../models";

@Component({
    selector: 'score-component',
    templateUrl: 'template.html'
})
export class ScoreComponent implements OnInit{
    @Input('score') score: Score

    constructor() {

    }
    ngOnInit() {
        // console.log('ScoreComponent ::', this.score)
    }
}