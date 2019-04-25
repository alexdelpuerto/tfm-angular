import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UserService} from '../home/users/user.service';
import {UserLogin} from '../home/users/user-login.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  username: string;
  pass: string;
  userLogin: UserLogin;
  homeUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private userService: UserService, private router: Router) {
    this.homeUrl = data.homeUrl;
  }

  login() {
    this.userLogin = {name: this.username, password: this.pass};
    this.userService.login(this.userLogin).subscribe(
      () => this.router.navigate([this.homeUrl])
    );
  }
}
