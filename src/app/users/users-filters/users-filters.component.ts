import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {UsersFiltersService} from './users-filters.service';

@Component({
  selector: 'app-users-filters',
  templateUrl: './users-filters.component.html',
  styleUrls: ['./users-filters.component.scss']
})
export class UsersFiltersComponent implements OnInit {

  @Input() users: User[];
  @Input() fields: string[];
  private filterTags;
  constructor(private usersFiltersService: UsersFiltersService) { }

  ngOnInit() {
    this.filterTags = this.usersFiltersService.extractFilterTags(this.users, this.fields);
    console.log(this.filterTags);
  }

}
