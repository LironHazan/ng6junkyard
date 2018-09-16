import { Component } from '@angular/core';
import {MyDialogService} from '../shared/my-dialog/my-dialog.service';
import {UserDialogComponent} from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private myDialogService: MyDialogService) {
  }

  private dataFromParent: any = {liron : {age: 30}};

  openUsersDalog() {
    this.myDialogService.open(UserDialogComponent, this.dataFromParent);
  }
}
