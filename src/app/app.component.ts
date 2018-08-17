import { Component } from '@angular/core';
import { time } from './junk-decorators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng6junkyard';

  constructor() {
    this.something(4, 5);
  }

  @time
  something(a, b) {
    console.log('inside decorated prop');
  }
}
