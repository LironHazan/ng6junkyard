import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsStoreService {

  private user = new ReplaySubject(1);

  constructor() { }

  public getUserDetails() {
    return this.user.asObservable();
  }

  public setUserDetails (userDetails: User) {
    this.user.next(userDetails);
  }


}
