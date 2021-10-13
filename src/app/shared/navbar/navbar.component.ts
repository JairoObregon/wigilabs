import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { INavBar} from "../../mockups/navbar.mockup"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  elements = INavBar
  toggle:boolean = true
  @Output() toggleEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.toggle = !this.toggle
    this.toggleEvent.emit(this.toggle)
  }

}
