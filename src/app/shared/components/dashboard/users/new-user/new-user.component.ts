import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],

})
export class NewUserComponent implements OnInit {

  constructor(private el: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#24242a');
  }

}
