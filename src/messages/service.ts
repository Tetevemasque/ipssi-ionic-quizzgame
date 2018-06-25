import { Injectable } from "@angular/core";
import { Message } from "./models";
import messages from './mock'
import { HttpService } from "../shared/http.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class MessagesService {
    subject: Subject<Array<Message>> = new Subject();

    constructor(public httpService: HttpService) {
    }

    loadMessages() {
        this
            .httpService
            .get('messages')
            .subscribe(response => {
                this.subject.next(response.json())
            },
            error => this.subject.error(error.json()))
    }

    addMessage(message: Message) {
        // this.messages.push(message);
    }
}
