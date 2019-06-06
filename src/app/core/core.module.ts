import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginDialogComponent} from './login-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { UserEditDialogComponent } from './user-edit-dialog.component';

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
    MatTableModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConfirmationDialogComponent,
    CrudComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    UserEditDialogComponent,
  ],
  exports: [
    ConfirmationDialogComponent,
    CrudComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    UserEditDialogComponent
  ],
    entryComponents: [
      ConfirmationDialogComponent,
      LoginDialogComponent,
      RegisterDialogComponent,
      UserEditDialogComponent
    ],
  providers: [
    HttpService,
    UserService
  ]
})
export class CoreModule { }
