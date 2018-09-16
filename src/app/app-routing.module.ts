import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from './core/navigation/navigation.component';
import {DashboardComponent} from './shared/dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent},
      {path: 'route2', component: DashboardComponent}
    ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
