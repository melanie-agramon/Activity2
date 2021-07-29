import { contact } from './contact';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  ContactList: AngularFireList<any>;
  Contact: AngularFireObject<any>;
  contService: any;

  constructor(public db: AngularFireDatabase) { }

    // Create
    createContact(cont: contact) {
      return this.ContactList.push({
        name: cont.name,
        mobile: cont.mobile
      })
}

    // Get Single
    getContact(id: string) {
      this.Contact = this.db.object('/contact/' + id);
      return this.Contact;
    }

    // Get List
  getContactList() {
    this.ContactList = this.db.list('/contact');
    return this.ContactList;
  }

  
  // deleteContact(id) {
  //   console.log(id)
  //   if (window.confirm('Do you really want to delete?')) {
  //     this.contService.deleteContact(id)
  //   }
  // }

}
