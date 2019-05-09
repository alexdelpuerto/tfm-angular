import {Component, Inject} from '@angular/core';
import {UserRegister} from '../home/users/user-register.model';
import {UserService} from '../home/users/user.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})

export class RegisterDialogComponent {
  username: string;
  password: string;
  name: string = null;
  surname: string = null;
  userRegister: UserRegister;
  homeUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private userService: UserService, private router: Router) {
    this.homeUrl = data.homeUrl;
  }

  register() {
    this.userRegister = {username: this.username, password: this.password, name: this.name, surname: this.surname};
    this.userService.register(this.userRegister).subscribe(
      () => this.router.navigate([this.homeUrl])
    );
  }
}
