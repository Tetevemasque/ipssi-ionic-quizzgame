import { Component } from '@angular/core';
import { Score } from './models';
import { NavController, NavParams } from 'ionic-angular';
import { ScoresService } from './service';

@Component({
    selector: 'scores',
    templateUrl: 'template.html'
})
export class Scores {
    public scores: Score[];
    public score: Score;

    constructor(
        public navController: NavController,
        public navParams: NavParams,
        public scoresService: ScoresService
    ) {
        this.scores = navParams.get('score');
    }

    ionViewWillEnter() {
        console.log("CAILLOUX0");
        this.scoresService.loadScores();
        this.scoresService
            .subject
            .asObservable()
            .subscribe(scores => this.scores = scores)
    }

    openScore(score) {
        console.log(score);
        this.navController.push(Scores, { score: score })
    }
}