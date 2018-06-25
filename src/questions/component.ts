import { Component } from '@angular/core';
import { Question } from './models';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionsService } from './service';
import { Events } from 'ionic-angular';

@Component({
    selector: 'questions',
    templateUrl: 'template.html'
})
export class Questions {
    public questions: Question[];
    public static qs: Question[];
    public static ListePoints = [];
    public question: Question;
    public TempsDuDebut: any;

    public static multiplicateur: number; // nb de points ajoutéS/retirés par bonne/mauvaise rep

    difficulte: any;

    public static selecReponse = function(id, reponse) {
        console.log(id + " réponse choisie : " + reponse);
        console.log("OUAIS ATTENTION");
        console.log(Questions.qs);

        if (reponse == Questions.qs[id]["reponse"]) {
            Questions.ListePoints[id] = this.multiplicateur;
        } else {
            Questions.ListePoints[id] = 0-(Questions.multiplicateur);
        }

        console.log(this.ListePoints);

    };

    finPartie() {
        let total = 0;
        Object.keys(Questions.ListePoints).forEach(function(key) {
            total = total + Questions.ListePoints[key];
        })

        alert("Votre score est de " + total + " points !");

        console.log(localStorage.getItem('token'));

        let nickname = localStorage.getItem('nickname');
        let avatar_url = "https://api.adorable.io/avatars/285/" + nickname;

        let DateDuMaintenant = Date.now();
        let TempsDuJeu = Math.round((DateDuMaintenant - this.TempsDuDebut) / 1000);

        this.questionsService.sendScore(nickname, total, TempsDuJeu, avatar_url);

        /*
            nickname	"[string] The player's nickname"
            score	"[number] The player's score"
            time	"[number] The player's game time (in seconds)"
            avatar_url	"[string] The player's avatar's URL"
        */
    }

    initPartie() {

        Questions.ListePoints = [];
        
        var difficulte = this.difficulte;
        if (difficulte == undefined) {
            difficulte = 'easy';
        }

        if (difficulte == 'easy') {
            Questions.multiplicateur = 5;
        } else if (difficulte == 'medium') {
            Questions.multiplicateur = 10;
        } else {
            Questions.multiplicateur = 20;
        }

        // alert(this.multiplicateur);

        this.questionsService.loadQuestions(20, difficulte);
        this.questionsService
            .subject
            .asObservable()
            .subscribe(questions => {
                this.questions = questions;
                Questions.qs = questions;
                console.log("ATTENDS on teste");
                console.log(this.questions);
                
            })

        this.TempsDuDebut = Date.now();
        
    }

    constructor(
        public navController: NavController,
        public navParams: NavParams,
        public questionsService: QuestionsService,
        public events: Events
    ) {
        this.question = navParams.get('question');

        Questions.ListePoints = [];

        events.subscribe('question:created', () => {
            Questions.ListePoints.push(0-(Questions.multiplicateur));
        })
    }

    ionViewWillEnter() {

    }

    openQuestion(question) {
        console.log(question);
        this.navController.push(Questions, { question: question })
    }
}