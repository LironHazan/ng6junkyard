import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './core/navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule} from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from './interceptors/api.interceptor';
import {TokenInterceptor} from './interceptors/token.interceptor';
import { AppRoutingModule } from './/app-routing.module';
import {UsersModule} from './users/users.module';
import { EmailHistoryComponent } from './email-history/email-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmailHistoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    UsersModule
],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
