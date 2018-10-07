import {Component, HostListener, OnInit} from '@angular/core';
import { time } from './junk-decorators';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostListener('copy', ['$event.target'])
  onCopy(copied) {
    console.log(copied);
  }

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.something(4, 5);
  }

  @time
  something(a, b) {
    console.log('inside decorated prop');
  }

  handleUserAction(action) {
    console.log(action);
  }
}
