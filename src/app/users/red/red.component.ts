import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit {

  params: any;

  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  ngOnInit() {
  }

}
