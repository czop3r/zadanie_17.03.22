import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './users/user';
import { UsersService } from './users/users.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private usersService: UsersService) { }

  onGetUsers() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(users => {
      this.usersService.onSetUsers(users)
    });
  }
}
