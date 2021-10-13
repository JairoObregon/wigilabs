import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'root'
})
export class TaksService {

  constructor(
    private firestore: AngularFirestore
 ) {}

 post(data:any) {
    return this.firestore.collection('tasks').add(data);
 }

 getAll() {
    return this.firestore.collection('tasks').snapshotChanges();
 }

 update(id:any, data:any) {
    this.firestore.doc('tasks/' + id).update(data);
 }

 delete(id:any) {
    this.firestore.doc('tasks/' + id).delete();
 }

}
