import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-editing-view',
  templateUrl: './editing-view.component.html',
  styleUrls: ['./editing-view.component.scss']
})

export class EditingViewComponent implements OnInit {

  constructor(private webRequest: WebRequestService, private route: ActivatedRoute) { }

  editingTask: any;

  updateTask(title: string, body: string) {
    console.log(this.editingTask)
    this.webRequest.update(title, body,this.editingTask._id)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.webRequest.getTask(params._id).subscribe(ret => this.editingTask = ret);
    })
  }

}
