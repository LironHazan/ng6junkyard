import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersFiltersService {

  constructor() { }

  public extractFilterTags(users, fields) {
      return users.reduce((acc, user) => {
        fields.forEach((field) => {
          if (!acc[field]) { acc[field] = new Set(); }
          acc[field].add(user[field]);
        });
        return acc;
      }, {});
  }
}
