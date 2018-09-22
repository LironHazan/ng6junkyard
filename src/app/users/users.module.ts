import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { RedComponent } from './red/red.component';
import {AgGridModule} from 'ag-grid-angular';
import { UsersFiltersComponent } from './users-filters/users-filters.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    AgGridModule.withComponents(
      [RedComponent]
    )
  ],
  declarations: [UsersComponent, UserDialogComponent, RedComponent, UsersFiltersComponent],
  entryComponents: [UserDialogComponent]
})
export class UsersModule { }
