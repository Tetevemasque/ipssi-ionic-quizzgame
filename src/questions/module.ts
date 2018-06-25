import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "ionic-angular";
import { Questions } from "./component";
import { QuestionsService } from "./service";
import { SharedModule } from "../shared/module";
import { QuestionComponent } from "./question/component";

@NgModule({
    imports: [
        BrowserModule,
        IonicModule,
        SharedModule
    ],
    entryComponents: [ Questions ],
    declarations: [ Questions, QuestionComponent ],
    providers: [ QuestionsService ],
    exports: [ Questions ]
})
export class QuestionsModule { }