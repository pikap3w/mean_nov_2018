import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient){}

  getTasks(){
      return this._http.get('/tasks')
  }

  getTaskById(id){
    console.log("This is an id:", id);
    return this._http.get("/tasks/"+id);
  }

}
