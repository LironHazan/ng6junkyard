import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from './core/navigation/navigation.component';
import {DashboardComponent} from './shared/dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {EmailHistoryComponent} from './email-history/email-history.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent},
      {path: 'conversation', component: EmailHistoryComponent}
    ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
