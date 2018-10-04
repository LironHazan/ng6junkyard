import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  @Input() conversation;

  public messages;
  constructor() { }

  ngOnInit() {
    this.messages = this.conversation.conversation;
  }

}
