import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-spy-on-user-actions',
  templateUrl: './spy-on-user-actions.component.html',
  styleUrls: ['./spy-on-user-actions.component.scss']
})
export class SpyOnUserActionsComponent implements OnInit {
  @Output() onUserAction = new EventEmitter();

  @HostListener('copy', ['$event.target'])
  onCopy(copied) {
    this.onUserAction.emit({copied});
  }

  @HostListener('document:visibilitychange', ['$event.target'])
  switchTab() {
    this.onUserAction.emit('switched tab');
  }

  constructor() { }

  ngOnInit() {
  }

}
