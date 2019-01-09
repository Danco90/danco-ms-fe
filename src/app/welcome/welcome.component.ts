import { Component, OnInit } from '@angular/core';
//import { AppComponent } from '../app.component'; //use class from external module

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  title='The Welcome Component'
  message : string = 'Some Welcome Message'

  constructor() { 
  }

  ngOnInit() {
    console.log(this.message)
  }

}
