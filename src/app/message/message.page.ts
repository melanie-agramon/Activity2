import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  contMessage = "";
  messages = [];
  constructor() { }

  ngOnInit() {
  }
    send(){
    let message = {
    content: this.contMessage
    }
    this.messages.push(message);
    this.clearField();
    console.log(this.messages);
    }
    clearField(){
      this.contMessage = "";
    }

}
