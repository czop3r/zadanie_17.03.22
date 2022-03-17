import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [];
  usersChanged = new Subject<User[]>();
  user: User;
  filtred: string;

  constructor() { }

  onSetUsers(users: User[]) {
    this.users = users;
    this.usersChanged.next(this.users.slice());
  }
  
  onGetUsers() {
    return this.users.slice();
  }

  onGetUser(id: number) {
    return this.users[id];
  }
}
