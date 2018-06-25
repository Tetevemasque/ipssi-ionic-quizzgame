import { Injectable } from "@angular/core";
import { Question } from "./models";
import { HttpService } from "../shared/http.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class QuestionsService {
    subject: Subject<Array<Question>> = new Subject();

    constructor(public httpService: HttpService) {
        console.log("🍆");
    }

    sendScore(nickname, score, time, avatar_url) {
        //alert(nickname);
        //alert(score);
        //alert(time);
        //alert(avatar_url);

        let data = new Object();

        data["nickname"] = nickname;
        data["score"] = score;
        data["time"] = time;
        data["avatar_url"] = avatar_url;

        console.log(data);
        

        this
            .httpService
            .envoyerScore(data)
            .subscribe(response => {
                alert("Votre score est disponible sur le leaderboard grand chef");
                console.log(response.json()["results"])
            },
            error => this.subject.error(error.json())
        )
    }

    loadQuestions(nb = 20, difficulte = 'easy') {
        // var questions = [];

        this
            .httpService
            .questions(nb, difficulte)
            .subscribe(response => {
                var rep = response.json()["results"];
                var questions = [];
                console.log(rep);

                Object.keys(rep).forEach(function(key) {
                    questions[key] = []; // Merci Jeremie
                    
                    var reponses = [rep[key]["correct_answer"]];

                    Object.keys(rep[key]["incorrect_answers"]).forEach(function(k) {
                        reponses.push(rep[key]["incorrect_answers"][k]);
                    });

                    questions[key]["id"] = key;
                    questions[key]["category"] = rep[key]["category"];
                    questions[key]["type"] = rep[key]["type"];
                    questions[key]["difficulty"] = rep[key]["difficulty"];
                    questions[key]["question"] = rep[key]["question"];
                    questions[key]["reponses"] = reponses;
                    questions[key]["reponse"] = rep[key]["correct_answer"];
                });

                console.log(questions);

                this.subject.next(questions)
            },
            error => this.subject.error(error.json())
        )
    }

}