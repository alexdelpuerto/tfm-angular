import { Component, OnInit } from '@angular/core';
import {Friends} from '../../friends/friends.model';
import {UserService} from '../../users/user.service';
import {MembersAdd} from './members-add.model';

@Component({
  selector: 'app-members-dialog',
  templateUrl: './members-dialog.component.html',
  styleUrls: ['./members-dialog.component.css']
})
export class MembersDialogComponent implements OnInit {
  dataMembers: Friends[];
  dataFriends: Friends[];
  columns = ['username', 'name'];
  title = 'Añadir amigos al evento';

  constructor(private userService: UserService) {
    this.dataFriends = [
      {id: 0, username: 'username', name: 'name', surname: 'surname'},
      {id: 0, username: 'username', name: 'name', surname: 'surname'}
    ];
/*
    this.dataMembers = [
      {id: 0, username: 'user', name: 'dasd', surname: 'asdas'},
      {id: 1, username: 'asdad', name: 'asdad', surname: 'asd'}
    ];*/
    this.dataMembers = null;
  }

  ngOnInit() {
    this.readUsersEvent();
    this.readFriends();
  }

  readUsersEvent() {
    this.userService.readUsersEvent(Number.parseInt(sessionStorage.getItem('eventId'), 10)).subscribe(
      users => {
        this.dataMembers = users['users'];
      }
    );
  }

  readFriends() {
    this.userService.readFriends(sessionStorage.getItem('username')).subscribe(
      friends => {
        this.dataFriends = friends['friends'];
      }
    );
  }

  addMember(friend: Friends) {
    let memberAdd: MembersAdd;
    memberAdd = {
      id: friend.id,
    };
    this.userService.addUser(Number.parseInt(sessionStorage.getItem('eventId'), 10), memberAdd).subscribe(
      result => {
        if (result) {
          return true;
        }
      }
    );
  }
}
