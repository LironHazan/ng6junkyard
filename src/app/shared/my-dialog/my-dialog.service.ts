import {Injectable, TemplateRef} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ComponentType} from '@angular/cdk/typings/portal';
import {MyDialogComponent} from './my-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MyDialogService {
  constructor(public dialog: MatDialog) { }

  private conf = { autoFocus: true };

  private mediumConf = {height: 'auto', width: '70%', ...this.conf};

  public open<T>(component: ComponentType<T> | TemplateRef<T>, data: any) {
    this.mediumConf['data'] = { component, data };
    const conf = this.mediumConf;
    return this.dialog.open(MyDialogComponent, conf);
  }
}

