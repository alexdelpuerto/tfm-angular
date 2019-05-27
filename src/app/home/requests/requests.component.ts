import { Component, OnInit } from '@angular/core';
import {UserRegister} from '../users/user-register.model';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  static URL = 'requests';

  title = 'Solicitudes de amistad';
  columns = ['userReceive'];
  data: any;

  constructor() { }

  ngOnInit() {
    this.data = [
      {username: 'user'},
      {username: 'user2'}
    ];
  }

  accept() {

  }

  cancel() {

  }

}
