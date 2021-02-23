import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})


export class NoteListComponent implements OnInit {

  @ViewChild('notes') private notes !: ElementRef;
  public name="";
  constructor(private webRequest:WebRequestService) { }

  sort(value:string){
    console.log(value)
  }

  clearAll(){
    this.notes.nativeElement.remove();
    this.webRequest.deleteAll();
  }

  ngOnInit(): void {
  }

}
