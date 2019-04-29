import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginDialogComponent} from './login-dialog.component';
import {FormsModule} from '@angular/forms';

import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import {HttpService} from './http.service';
import {UserService} from '../home/users/user.service';
import {HttpClientModule} from '@angular/common/http';
import { RegisterDialogComponent } from './register-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    LoginDialogComponent,
    RegisterDialogComponent
  ],
   exports: [
     LoginDialogComponent,
     RegisterDialogComponent
   ],
    entryComponents: [
      LoginDialogComponent,
      RegisterDialogComponent
    ],
  providers: [
    HttpService,
    UserService
  ]
})
export class CoreModule { }
