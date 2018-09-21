import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersFiltersService {

  constructor() { }

  public extractFilterTags(users, fields) {
      return users.reduce((acc, user) => {
        fields.forEach((field) => { // O(n) the fields is constant and won't grow on time
          if (!acc[field]) { acc[field] = new Set(); }
          acc[field].add(user[field]);
        });
        return acc;
      }, {});
  }
}
