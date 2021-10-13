import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaksService } from 'src/app/services/taks.service';


@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.css']
})
export class FormTasksComponent implements OnInit {

  @ViewChild('closebutton') closebutton: any;
  form! : FormGroup 

  constructor(private fb: FormBuilder , private taksService:TaksService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [ '' , Validators.required],
      latitud: [ '' , Validators.required],
      longitud: [ '' , Validators.required],
      isActive: [ false],
    })
  }

  add() {
    const data = this.form.value;
    this.taksService.post(data).then(() => {
      this.closebutton.nativeElement.click();
    });
  }
}
