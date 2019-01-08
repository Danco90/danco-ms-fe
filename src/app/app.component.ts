import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<h1>{{title}}</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Danco MS';
  message = 'Here are some links to help you start:';
  date: Date = new Date();
}
