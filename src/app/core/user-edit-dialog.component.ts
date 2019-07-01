import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../home/users/user.service';
import {UserRegister} from '../home/users/user-register.model';
import {MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit {
  user: UserRegister;
  userForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, private router: Router) {
    this.user = data.user['user'];
    this.userService = userService;
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(this.user.username),
      password: new FormControl(this.user.password),
      name: new FormControl(this.user.name),
      surname: new FormControl(this.user.surname)
    });
  }

  edit() {
    this.userService.updateUser(Number.parseInt(sessionStorage.getItem('userId'), 10), this.userForm.value).subscribe(
      result => {
        if (result) {
          sessionStorage.setItem('username', this.userForm.get('username').value);
          return true;
        }
      }
    );
  }

  delete() {
    this.userService.deleteUser(Number.parseInt(sessionStorage.getItem('userId'), 10)).subscribe(
      result => {
        if (result) {
          return true;
        }
      }
    );
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
