import { Component, OnInit } from '@angular/core';
import {RequestsService} from './requests.service';
import {Request} from './request.model';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  static URL = 'requests';
  data: Request[];
  username: string;

  constructor(private requestService: RequestsService) {
    this.data = [{id: null, userSend: null}];
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.readAllRequests();
  }

  accept() {

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
