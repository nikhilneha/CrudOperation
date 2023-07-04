import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent {

  constructor(private todoServe:TodoService, private activateRoute:ActivatedRoute){
   activateRoute.params.subscribe((res)=>this.paramdata=res)
   this.getDataById()
  }

  paramdata:any

  editTask:FormGroup=new FormGroup({
    id:new FormControl("",[Validators.required,Validators.maxLength(5),Validators.minLength(2)]),
    name:new FormControl("",[Validators.required,Validators.maxLength(5),Validators.minLength(2)]),
    time:new FormControl("",[Validators.required,Validators.maxLength(5),Validators.minLength(2)])
  })

   getDataById()
   {
     this.todoServe.getDataById(this.paramdata.id).subscribe((res)=>this.editTask.setValue(res))
   }

  UpdateData()
  {
    this.todoServe.putData(this.paramdata.id,this.editTask.value).subscribe((res)=>console.log)
  }
}
