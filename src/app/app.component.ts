import {Component, OnInit} from '@angular/core';
import { time } from './junk-decorators';
import {AppService} from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng6junkyard';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.something(4, 5);
    this.appService.getContacts() // just for testing the interceptors
      .subscribe((result) => {
        console.log(result);
      }, err => console.log(err));
  }

  @time
  something(a, b) {
    console.log('inside decorated prop');
  }
}
