import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import {AgGridModule} from 'ag-grid-angular';
import { UsersFiltersComponent } from './users-filters/users-filters.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    AgGridModule.withComponents([])
  ],
  declarations: [UsersComponent, UserDialogComponent, UsersFiltersComponent],
  entryComponents: [UserDialogComponent]
})
export class UsersModule { }
