import {Component, Inject, OnInit} from '@angular/core';
import {Friends} from '../../friends/friends.model';
import {UserService} from '../../users/user.service';
import {MembersAdd} from './members-add.model';
import {MAT_DIALOG_DATA} from '@angular/material';

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
  eventId: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
    this.eventId = data.eventId;
    this.dataFriends = null;
    this.dataMembers = null;
  }

  ngOnInit() {
    this.readUsersEvent();
    this.readFriends();
  }

  readUsersEvent() {
    this.userService.readUsersEvent(this.eventId).subscribe(
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
    this.userService.addUser(this.eventId, memberAdd).subscribe(
      result => {
        if (result) {
          return true;
        }
      }
    );
  }
}
