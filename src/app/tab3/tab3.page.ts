import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ContactsService } from './../contact/contacts.service';
import { contact } from '../contact/contact';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  contactForm: FormGroup;
  contacts: any = [];

  constructor(public alertController: AlertController, 
    public router:Router,
    public contService: ContactsService,
    public fb: FormBuilder) { }

  ngOnInit() {

    this.fetchContact();
    let contact = this.contService.getContactList();
    contact.snapshotChanges().subscribe(res => {
      this.contacts = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.contacts.push(a as contact);
      })
    })
  }

  fetchContact() {
    this.contService.getContactList().valueChanges().subscribe(res => {
      console.log(res)
    })

    this.contactForm = this.fb.group({
      name: [''],
      mobile: ['']
    })
   
  }

  saveC() {
    if (!this.contactForm.valid) {
      return false;
    } else {
      this.contService.createContact(this.contactForm.value).then(res => {
        console.log(res)
        this.contactForm.reset();
      })
      .catch(error => console.log(error));
  }
 }

  // async trash(cont) {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Confirm Deletion?',
  //     message: '<strong>Are you sure you want to permanetly remove this contact?</strong>',
  //     buttons: [
  //       {
  //         text: 'Disagree',
  //         role: 'disagree',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           console.log('Disagree!');
  //         }
  //       }, {
  //         text: 'Agree',
  //         handler: () => {
  //         let index = this.contacts.indexOf(cont);
  //         if(index > -1){
  //         this.contacts.splice(index, 1);
  //           console.log('Agree!');
  //         }
  //         }
  //       }
  //     ]
  //   });

  // }

  message(){
    console.log();
    this.router.navigate(['message'])
  }


}
