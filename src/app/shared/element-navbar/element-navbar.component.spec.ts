import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementNavbarComponent } from './element-navbar.component';

describe('ElementNavbarComponent', () => {
  let component: ElementNavbarComponent;
  let fixture: ComponentFixture<ElementNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
