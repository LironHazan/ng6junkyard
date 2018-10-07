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
import {ConversationComponent} from './conversion/conversation.component';
import { SpyOnUserActionsComponent } from './spy-on-user-actions/spy-on-user-actions.component';

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
  declarations: [ DashboardComponent, MyDialogComponent, ConversationComponent, SpyOnUserActionsComponent],
  exports:      [ DashboardComponent,
    CommonModule, FormsModule, DashboardComponent, ConversationComponent, SpyOnUserActionsComponent ],
  entryComponents: [MyDialogComponent]
})
export class SharedModule { }
