import {Component, OnInit} from '@angular/core';
import {Friends} from './friends.model';
import {UserService} from '../users/user.service';

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
  data: any;
  data2: Friends[];
  userSearch: string;

  constructor(private userService: UserService) {
    this.userSearch = null;
    this.data = [{username: 'user', name: 'name', surname: 'surname'}];
    this.data2 = null;
  }

  ngOnInit() {
  }

  resetSearch() {
    this.userSearch = null;

  }

  search() {
    this.userService.readUsers(this.userSearch).subscribe(
      users => {
        this.data2 = users['users'];
        console.log(this.data2);
      }
    );
  }
}
