import { Component, OnInit } from '@angular/core';
import {UserRegister} from '../users/user-register.model';

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
  data2: any;
  userSearch: UserRegister;

  constructor() {
    this.userSearch = {username: null, password: null, name: null, surname: null};
    this.data = [{username: 'user', name: 'name', surname: 'surname'}];
    this.data2 = [{username: 'nuevo', name: 'name', surname: 'surname'}];
  }

  ngOnInit() {
  }

  resetSearch() {
    this.userSearch = {username: null, name: null, surname: null, password: null};
  }
}
