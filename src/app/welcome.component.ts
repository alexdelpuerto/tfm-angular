import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {LoginDialogComponent} from './core/login-dialog.component';
import {RegisterDialogComponent} from './core/register-dialog.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  static URL = 'welcome';

  constructor(private dialog: MatDialog) { }

  login() {
    this.dialog.open(LoginDialogComponent,
      {
        data: {homeUrl: HomeComponent.URL}
      }
    );
  }

  register() {
    this.dialog.open(RegisterDialogComponent,
      {
        data: {homeUrl: HomeComponent.URL}
      }
    );
  }
}
