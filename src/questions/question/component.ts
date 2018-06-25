import { Component, Input, OnInit } from "@angular/core";
import { Question } from "../models";
import { Events } from 'ionic-angular';
import { Questions } from "../component";

@Component({
    selector: 'question-component',
    templateUrl: 'template.html'
})

export class QuestionComponent implements OnInit{
    @Input('question') question: Question

    constructor(public events: Events) {
        this.events.publish('question:created');
    }

    selecReponse(reponse) {
        Questions.selecReponse(this.question.id, reponse);
    }

    ngOnInit() {
        // console.log('QuestionComponent ::', this.question)
    }
}