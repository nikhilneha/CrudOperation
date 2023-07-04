import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private todo:HttpClient) { }

    getdata()
    {
      return this.todo.get(`url`)
    }
    postData(data:any)
    {
      return this.todo.post(`url`,data)
    }
    getDataById(id:number)
    {
      return this.todo.get(`url/${id}`)
    }
    putData(id:number,data:any)
    {
      return this.todo.put(`url/${id}`,data)
    }
}
