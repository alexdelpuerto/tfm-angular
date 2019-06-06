import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit {
  username: string;
  password: string;
  name: string;
  surname: string;

  constructor() { }

  ngOnInit() {
  }

  edit() {

  }
}
