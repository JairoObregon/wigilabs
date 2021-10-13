import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  form! : FormGroup 
  constructor(private fb: FormBuilder,private contact: ContactService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [ '' , Validators.required],
      email: [ '' , [Validators.required, Validators.email]],
      message: [ '' , Validators.required],
    })
  }

  submit() {
    const data = this.form.value;
    this.contact.post(data).then(() => {
      this.form.reset()
    });
  }

}
