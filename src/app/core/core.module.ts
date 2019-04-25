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

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  declarations: [
    LoginDialogComponent
  ],
   exports: [
     LoginDialogComponent
   ],
    entryComponents: [
      LoginDialogComponent
    ]
})
export class CoreModule { }
