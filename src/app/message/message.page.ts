import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  contents = "";
  messages = [];

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    let messages = {
      contents:this.contents  
    }
    this.messages.push(messages);
    this.clearfield();
    console.log(this.messages);
  }
  clearfield(){
    this.contents ="";
  }

}
