import { Component, OnInit } from '@angular/core';
import {Friends} from '../../friends/friends.model';

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

  constructor() {
    this.dataFriends = [
      {id: 0, username: 'username', name: 'name', surname: 'surname'},
      {id: 0, username: 'username', name: 'name', surname: 'surname'}
    ];

    this.dataMembers = [
      {id: 0, username: 'user', name: 'dasd', surname: 'asdas'},
      {id: 1, username: 'asdad', name: 'asdad', surname: 'asd'}
    ];
  }

  ngOnInit() {
  }

}
