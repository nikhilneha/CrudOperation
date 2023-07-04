import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  constructor(private todoServe:TodoService){
    this.getAllData()
  }
  list:any

  getAllData()
  {
    this.todoServe.getdata().subscribe((res)=>this.list=res)
  }
}
