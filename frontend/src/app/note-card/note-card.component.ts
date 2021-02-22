import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { EditingViewComponent } from '../pages/editing-view/editing-view.component';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() body: string = "";

  @ViewChild('fade') fade !: ElementRef<HTMLElement>;
  @ViewChild('content') content !: ElementRef<HTMLElement>;

  tasks: any;

  constructor(private render: Renderer2, private webRequest: WebRequestService, ) { }

  delete(title: any) {
    this.tasks.forEach(task => {
      if (task.title === title) {
        this.webRequest.deleteTask(task._id)
      }
    });
  }

  edit(title) {
    this.tasks.forEach(task => {
      if (task.title === title) {
        window.location.href = 'http://localhost:4200/tasks/edit/'+task._id
      }
    })
  }

  async ngOnInit(): Promise<void> {

    this.webRequest.getTasks().subscribe(res => this.tasks = res)

    await this.fade;
    await this.content;

    let style = window.getComputedStyle(this.content.nativeElement, null)
    let viewAbleHeigh = parseInt(style.getPropertyValue("height"), 10)

    if (this.content.nativeElement.scrollHeight > viewAbleHeigh) {
      this.render.setStyle(this.fade.nativeElement, 'display', 'block')
    } else {
      this.render.setStyle(this.fade.nativeElement, 'display', 'none')
    }
  }

}
