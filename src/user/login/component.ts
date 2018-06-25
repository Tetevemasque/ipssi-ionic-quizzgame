import { Component } from "@angular/core";
import { UserService } from "../service";
import { User } from "../models";
import { NavController } from "ionic-angular/navigation/nav-controller";

@Component({
    selector: 'login-page',
    templateUrl: 'template.html'
})
export class LoginPage {
    private user: User = {
        login: '',
        password: ''
    }

    constructor(public userService: UserService, 
        public navController: NavController) {
    }

    login() {
        this
            .userService
            .login(this.user)
            .subscribe(response => {
                const token = response.json()['token'];
                localStorage.setItem('token', token);
                this.navController.goToRoot({});
            }, error => {
                console.error(error);
            })
    }
}