import {Component, OnInit} from '@angular/core';
import {Friends} from './friends.model';
import {UserService} from '../users/user.service';
import {ConfirmationDialogComponent} from '../../core/confirmation-dialog.component';
import {MatDialog} from '@angular/material';
import {RequestsService} from '../requests/requests.service';
import {Request} from '../requests/request.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  static URL = 'friends';
  title = 'Tus Amigos';
  title2 = 'Añadir Amigos';
  columns = ['username', 'name', 'surname'];
  data: Friends[];
  data2: Friends[];
  userSearch: string;

  constructor(private dialog: MatDialog, private userService: UserService, private requestService: RequestsService) {
    this.userSearch = null;
    this.data = null;
    this.data2 = null;
  }

  ngOnInit() {
    this.readAll();
  }

  resetSearch() {
    this.userSearch = null;

  }

  readAll() {
    this.userService.readFriends(sessionStorage.getItem('username')).subscribe(
      friends => { this.data = friends['friends'];
      }
    );
  }

  search() {
    this.userService.readUsers(this.userSearch).subscribe(
      users => {
        this.data2 = users['users'];
        console.log(this.data2);
      }
    );
  }

  sendRequest(friend: Friends) {
    let request: Request;
    request = {
      userSend: sessionStorage.getItem('username'),
      userReceive: friend.username
    };
    this.dialog.open(ConfirmationDialogComponent).afterClosed().subscribe(
      (response) => {
        if (response) {
          this.requestService.create(request).subscribe();
        }
      }
    );
  }
}
