import { NgModule } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpModule } from "@angular/http";
import { Config } from "./config";

@NgModule({
    providers: [ Config, HttpService ],
    imports: [ HttpModule ]
})
export class SharedModule { }
