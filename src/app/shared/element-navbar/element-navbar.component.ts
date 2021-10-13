import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element-navbar',
  templateUrl: './element-navbar.component.html',
  styleUrls: ['./element-navbar.component.css'],
})
export class ElementNavbarComponent implements OnInit {
  
  @Input() element: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(link: String) {
    this.router.navigate([link]);
  }
}
