import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL

  constructor(private http:HttpClient) {
    this.ROOT_URL = 'http://localhost:3000'
   }

  createTask(title:string,body:string){
    return this.http.post(this.ROOT_URL+'/tasks',{title,body}).subscribe(ret=>console.log(ret))
  }

  getTasks(){
    return this.http.get(this.ROOT_URL+'/tasks');
  }

  deleteTask(id:string){
    return this.http.delete(`${this.ROOT_URL}/tasks/${id}`).subscribe()
  }

  getTask(id:string){
    return this.http.get(this.ROOT_URL+'/tasks/'+id);
  }

  update(title:string,body:string,id:string){
    return this.http.patch(this.ROOT_URL+'/tasks/'+id,{title,body}).subscribe(ret=>console.log(ret))
  }
}
