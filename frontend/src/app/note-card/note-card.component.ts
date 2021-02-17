import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() body : string = "";

  @ViewChild('fade') fade !: ElementRef<HTMLElement>;
  @ViewChild('content') content !: ElementRef<HTMLElement>;

  constructor(private render: Renderer2) { }

  async ngOnInit(): Promise<void> {

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
