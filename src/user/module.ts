import { NgModule } from "@angular/core";
import { SubscribePage } from "./subscribe/component";
import { IonicModule } from "ionic-angular/module";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/module";
import { UserService } from "./service";
import { LoginPage } from "./login/component";

@NgModule({
    declarations: [ SubscribePage, LoginPage ],
    entryComponents: [ SubscribePage, LoginPage ],
    imports: [ IonicModule, BrowserModule, SharedModule ],
    providers: [ UserService ]
})
export class UserModule { }
