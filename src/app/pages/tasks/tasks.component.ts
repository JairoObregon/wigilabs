import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaksService } from '../../services/taks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  form!: FormGroup;
  tasks: any[] = [];

  constructor(private fb: FormBuilder, private taksService: TaksService) {}

  ngOnInit(): void {

    this.taksService.getAll().subscribe((data) => {
      this.tasks = []
      data.map((e) => {
        this.tasks.push  ({
          id: e.payload.doc.id,
          data: e.payload.doc.data(),
        });
      });
    });
  }

  deleteTask(id:any){
    this.taksService.delete(id)
  }
}
