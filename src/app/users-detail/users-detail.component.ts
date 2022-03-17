import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../users/user';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  user: User;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.usersService.user;
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
