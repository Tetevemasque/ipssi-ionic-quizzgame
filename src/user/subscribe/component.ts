import { Component } from "@angular/core";
import { UserService } from "../service";
import { User } from "../models";
import { NavController } from "ionic-angular/navigation/nav-controller";
import { LoginPage } from "../login/component";
import { ToastController } from "ionic-angular/components/toast/toast-controller";

@Component({
    selector: 'subscribe-page',
    templateUrl: 'template.html'
})
export class SubscribePage {
    private user: User = {
        login: '',
        password: ''
    }

    constructor(public userService: UserService, 
        public navController: NavController,
        public toastController: ToastController
    ) {
    }

    subscribe() {
        this
            .userService
            .signUp(this.user)
            .subscribe(response => {
                console.log(response);
                this.navController.push(LoginPage)
            }, error => {
                const toast = this.toastController.create({
                    duration: 3000,
                    message: error
                })
                console.error(error);
            })
    }
}