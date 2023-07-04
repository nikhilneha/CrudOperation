import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {

  constructor(private todoServe:TodoService){}

  newTask:FormGroup=new FormGroup({
    id:new FormControl("",[Validators.required,Validators.maxLength(5),Validators.minLength(2)]),
    name:new FormControl("",[Validators.required,Validators.maxLength(5),Validators.minLength(2)]),
    time:new FormControl("",[Validators.required,Validators.maxLength(5),Validators.minLength(2)])
  })

  saveData()
  {
    this.todoServe.postData(this.newTask.value).subscribe((res)=>{console.log(res)
    alert("Task is added Successfully")
    }
     
    )
  }
}
