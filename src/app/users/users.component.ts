import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PostsService } from '../posts.service';
import { User } from './user';
import { UsersService } from './users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscription: Subscription;
  filtred: string = '';
  user: User;

  constructor(private usersService: UsersService, 
              private postsService: PostsService, 
              private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.usersService.usersChanged
    .subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
    this.postsService.onGetUsers()
    this.filtred = this.usersService.filtred;
  }

  onUserDetail(user: User) {
    this.usersService.filtred = this.filtred;
    this.usersService.user = user;
    this.router.navigate(['users/' + user.id + '_' + user.username]);
  }

  onClear() {
    this.filtred = ''
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
