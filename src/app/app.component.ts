import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-test';
  texto  = 'QLQ ANGULAR';
  e: number = 10;
  a: number = 1;
  b: number = 2;
  c: number = this.a + this.b;  
}