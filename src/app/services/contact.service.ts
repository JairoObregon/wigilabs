import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private firestore: AngularFirestore
 ) {}

 post(data:any) {
    return this.firestore.collection('contact').add(data);
 }

}
