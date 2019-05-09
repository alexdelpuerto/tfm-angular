import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginDialogComponent} from './login-dialog.component';
import {FormsModule} from '@angular/forms';
import { RegisterDialogComponent } from './register-dialog.component';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

import {HttpService} from './http.service';
import {UserService} from '../home/users/user.service';
import {HttpClientModule} from '@angular/common/http';
import { CrudComponent } from './crud.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTableModule
  ],
  declarations: [
    CrudComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  exports: [
    CrudComponent,
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
