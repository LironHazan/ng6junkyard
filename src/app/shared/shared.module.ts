import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatButtonModule, MatCardModule, MatGridListModule,
  MatIconModule,
  MatMenuModule, MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatDialogModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  declarations: [ DashboardComponent, MyDialogComponent],
  exports:      [ DashboardComponent,
    CommonModule, FormsModule, DashboardComponent ],
  entryComponents: [MyDialogComponent]
})
export class SharedModule { }
