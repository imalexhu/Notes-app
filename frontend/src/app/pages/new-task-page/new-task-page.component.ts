import { Component, OnInit } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-new-task-page',
  templateUrl: './new-task-page.component.html',
  styleUrls: ['./new-task-page.component.scss']
})
export class NewTaskPageComponent implements OnInit {

  constructor(private webRequest:WebRequestService) { }

  createNewTask(title:string, body:string){
    this.webRequest.createTask(title,body)
  }
  ngOnInit(): void {
  }

}
