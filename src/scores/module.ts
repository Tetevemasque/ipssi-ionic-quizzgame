import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "ionic-angular";
import { Scores } from "./component";
//import { PostScore } from "./post-score/component";
import { ScoresService } from "./service";
import { SharedModule } from "../shared/module";
import { ScoreComponent } from "./score/component";

@NgModule({
    imports: [
        BrowserModule,
        IonicModule,
        SharedModule        
    ],
    entryComponents: [ Scores ],
    declarations: [ Scores, ScoreComponent ],
    providers: [ ScoresService ],
    exports: [ Scores ]
})
export class ScoresModule { }