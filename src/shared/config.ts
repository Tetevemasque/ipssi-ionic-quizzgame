import { Injectable } from "@angular/core";

@Injectable()
export class Config {
    API_URL: string = 'https://leaderboard.lp1.eu/api/json'; // ?amount=*NombreDeQuestions*&difficulty=*Difficulté*
    API_POST_URL: string = 'https://leaderboard.lp1.eu/api/score';
    API_LOG_URL: string = 'http://board.lp1.eu/';
    API_QUESTIONS_URL: string = 'https://opentdb.com/api.php'; // SCORES: /api/json ; AJOUTER UN SCORE: /api/score 
}
