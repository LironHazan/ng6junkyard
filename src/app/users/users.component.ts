import {Component, OnInit} from '@angular/core';
import {MyDialogService} from '../shared/my-dialog/my-dialog.service';
import {UserDialogComponent} from './user-dialog/user-dialog.component';
import {users} from '../../../mocks/users';
import {GridOptions} from 'ag-grid-community';
import {User} from './models/user.model';
import {UsersService} from './users.service';
import {UserDetailsStoreService} from './store/user-details-store.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  mockedUsers = users;
  gridOptions: GridOptions;
  selectedUser: User;
  fields: string[] = ['company', 'department', 'role'];

  // filter levels:
  // company
    // department
     // role

  private filterLevel = {state: this.mockedUsers, name: 'company'};

  constructor(private myDialogService: MyDialogService,
  private usersService: UsersService,
              private userDetailsStoreService: UserDetailsStoreService) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: 'ID',
        field: 'id',
      },
      {
        headerName: 'Name',
        field: 'first_name',
      },
      {
        headerName: 'Last Name',
        field: 'last_name',
      },
      {
        headerName: 'Email',
        field: 'email',
      },
      {
        headerName: 'Company',
        field: 'company',
      },
      {
        headerName: 'Department',
        field: 'department',
      },
      {
        headerName: 'Job Title',
        field: 'role',
      },

    ];
    this.gridOptions.rowData = this.mockedUsers;
  }

  ngOnInit() {
  }

  onCellClicked(event) {
    this.selectedUser = this.usersService.transformToUser(event.data);
    this.userDetailsStoreService.setUserDetails(this.selectedUser);
    this.openUsersDialog().afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }
  openUsersDialog() {
    if (!this.selectedUser) { return; }
    return this.myDialogService.open(UserDialogComponent, this.selectedUser);
  }

  onItemSelected(item) {
    console.log(item);
  }
}
