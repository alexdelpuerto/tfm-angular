import { Component, OnInit } from '@angular/core';
import {RequestsService} from './requests.service';
import {Request} from './request.model';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../../core/confirmation-dialog.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  static URL = 'requests';
  data: Request[];
  username: string;

  constructor(private requestService: RequestsService, private dialog: MatDialog) {
    this.data = [{id: null, userSend: null, userReceive: null}];
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.readAllRequests();
  }

  accept() {
    this.dialog.open(ConfirmationDialogComponent).afterClosed().subscribe(
      (response) => {
        if (response) {
          //this.requestService.accept().subscribe();
        }
      }
    );
  }

  cancel() {

  }

  readAllRequests() {
    this.requestService.readAllRequests(this.username).subscribe(
      data => {
        this.data = data['requests'];
      }
    );
  }
}
