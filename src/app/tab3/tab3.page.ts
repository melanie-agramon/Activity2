import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName = "";
  contNumber = ""
  contacts = [];
  constructor() {}

  saveContact() {
    let contact = {
      name: this.contName,
      number: this.contNumber
    }
    this.contacts.push(contact);
    this.clearField();
    console.log(this.contacts);
  }
  clearField(){
    this.contName = "";
    this.contNumber = "";
  }
  deleteContact(index){
    let status = confirm("Are you sure you want to delete this contact?");

    if(status == true){
        this.contacts.splice(index, 1);
      }
    else{
      console.log("Cancelled");
    }
  }
}
