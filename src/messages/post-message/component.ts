import { Component } from '@angular/core';
import { Message } from '../models';
import { MessagesService } from '../service';
import { ToastController, NavController } from 'ionic-angular';
import { Messages } from '../component';

@Component({
    selector: 'post-message',
    templateUrl: 'template.html'
})
export class PostMessage {
    public message: Message;

    constructor(public messagesService: MessagesService,
        public toastCtrl: ToastController,
        public navCtrl: NavController
        ) {
        this.message = {
            author: {
                login: 'Test',
                avatar: 'https://www.drupal.org/files/issues/default-avatar.png'
            },
            content: '',
            date: '',
            type: 0
        }
    }

    send() {
        console.log(this.message);
        this.message.date = new Date().toISOString();
        this.messagesService.addMessage(this.message);
        this.message.content = '';
        const toast = this.toastCtrl.create({
            message: 'Your message has been correctly sent',
            duration: 3000,
            position: 'bottom'
        });
        toast
            .present()
            .then(() => {
                this.navCtrl.push(Messages);
        })
    }

}
