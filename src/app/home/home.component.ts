import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventsComponent} from './events/events.component';
import {FriendsComponent} from './friends/friends.component';
import {PaymentsComponent} from './payments/payments.component';
import {RequestsComponent} from './requests/requests.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {UserEditDialogComponent} from '../core/user-edit-dialog.component';
import {UserService} from './users/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  static URL = 'home';

  username: string = undefined;
  userId: string = undefined;

  constructor(private router: Router, private dialog: MatDialog, private userService: UserService) {
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.userId = sessionStorage.getItem('userId');
  }

  home() {
    this.router.navigate([HomeComponent.URL]);
  }

  events() {
    this.router.navigate([HomeComponent.URL, EventsComponent.URL]);
  }

  friends() {
    this.router.navigate([HomeComponent.URL, FriendsComponent.URL]);
  }

  payments() {
    this.router.navigate([HomeComponent.URL, PaymentsComponent.URL]);
  }

  requests() {
    this.router.navigate([HomeComponent.URL, RequestsComponent.URL]);
  }

  edit() {
    this.userService.readUser(Number.parseInt(sessionStorage.getItem('userId'), 10)).subscribe(response => {
      const dialogConfig: MatDialogConfig = {
        data: {
          user: response
        }
      };
      this.dialog.open(UserEditDialogComponent, dialogConfig);
    }, error => {

    });
  }
}
