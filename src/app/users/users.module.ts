import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersComponent, UserDialogComponent],
  entryComponents: [UserDialogComponent]
})
export class UsersModule { }
