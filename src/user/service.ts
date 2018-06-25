import { Injectable } from "@angular/core";
import { User } from "./models";
import { HttpService } from "../shared/http.service";

@Injectable()
export class UserService {

    constructor(public http: HttpService) {
    }

    signUp(user: User) {
        return this.http.post('users', user);
    }

    login(user: User) {
        return this.http.post('login', user);
    }
}