import {Component, OnInit} from '@angular/core';
import {MyDialogService} from '../shared/my-dialog/my-dialog.service';
import {UserDialogComponent} from './user-dialog/user-dialog.component';
import {users} from '../../../mocks/users';
import {GridOptions} from 'ag-grid-community';
import {RedComponent} from './red/red.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  mockedUsers = users;
  private dataFromParent: any = {liron : {age: 30}};
  gridOptions: GridOptions;

  constructor(private myDialogService: MyDialogService) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: "ID",
        field: "id",
        width: 100
      },
      {
        headerName: "Name",
        field: "first_name",
        //cellRendererFramework: RedComponent,
        width: 100
      },
      {
        headerName: "Last Name",
        field: "last_name",
        //cellRendererFramework: RedComponent,
        width: 100
      },
      {
        headerName: "Email",
        field: "email",
        //cellRendererFramework: RedComponent,
        width: 100
      },
      {
        headerName: "Company",
        field: "company",
        //cellRendererFramework: RedComponent,
        width: 100
      },
      {
        headerName: "Department",
        field: "department",
        //cellRendererFramework: RedComponent,
        width: 100
      },
      {
        headerName: "Job Title",
        field: "role",
        //cellRendererFramework: RedComponent,
        width: 100
      },

    ];
    this.gridOptions.rowData = this.mockedUsers;
  }

  ngOnInit() {
    console.log(this.mockedUsers);
  }

  openUsersDalog() {
    this.myDialogService.open(UserDialogComponent, this.dataFromParent);
  }
}
