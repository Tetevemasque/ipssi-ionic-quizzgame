import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "ionic-angular";
import { Messages } from "./component";
import { PostMessage } from "./post-message/component";
import { MessagesService } from "./service";
import { SharedModule } from "../shared/module";
import { MessageComponent } from "./message/component";

@NgModule({
    imports: [
        BrowserModule,
        IonicModule,
        SharedModule
    ],
    entryComponents: [ Messages, PostMessage ],
    declarations: [ Messages, PostMessage, MessageComponent ],
    providers: [ MessagesService ],
    exports: [ Messages, PostMessage ]
})
export class MessagesModule { }
