import { Component } from '@angular/core';
import { Message } from './models';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesService } from './service';

@Component({
    selector: 'messages',
    templateUrl: 'template.html'
})
export class Messages {
    public messages: Message[];
    public message: Message;

    constructor(public navController: NavController,
        public navParams: NavParams,
        public messagesService: MessagesService) {
        this.message = navParams.get('message');
    }

    ionViewWillEnter() {
        this.messagesService.loadMessages();
        this.messagesService
            .subject
            .asObservable()
            .subscribe(messages => this.messages = messages)
    }

    openMessage(message) {
        console.log(message);
        this.navController.push(Messages, { message: message })
    }
}
