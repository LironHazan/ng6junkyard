import { Injectable } from '@angular/core';
import {User} from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  transformToUser({id, first_name, last_name, email, company, department, role}): User {
    return {
      id,
      firstName: first_name,
      lastName: last_name,
      email,
      company,
      department,
      role
    };
  }
}
