import { Component, Input, OnInit } from "@angular/core";
import { Message } from "../models";

@Component({
    selector: 'message-component',
    templateUrl: 'template.html'
})
export class MessageComponent implements OnInit{
    @Input('message') message: Message

    constructor() {
    }
    ngOnInit() {
        // console.log('MessageComponent ::', this.message)        
    }
}