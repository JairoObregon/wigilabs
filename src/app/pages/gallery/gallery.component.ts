import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  item$: Observable<any[]>;
  constructor(firestore: Firestore) {
    const data = collection(firestore, 'tasks');
    this.item$ = collectionData(data);
    this.item$.subscribe(data => {
      console.log(data)
    })  
  }

  ngOnInit(): void {
  }

  

}
