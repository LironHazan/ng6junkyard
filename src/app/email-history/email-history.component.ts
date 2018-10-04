import { Component, OnInit } from '@angular/core';
import {email_conversions} from '../../../mocks/emails';

@Component({
  selector: 'app-email-history',
  templateUrl: './email-history.component.html',
  styleUrls: ['./email-history.component.scss']
})
export class EmailHistoryComponent implements OnInit {

  public conversations = email_conversions;
  constructor() { }

  ngOnInit() {
  }

}
