import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsStoreService {

  private user = new ReplaySubject(1);

  constructor() { }

  public getUserDetails () {
    return this.user.asObservable();
  }

  public setUserDetails (userDetails) {
    this.user.next(userDetails);
  }


}
