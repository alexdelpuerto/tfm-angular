import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventsComponent} from '../events/events.component';
import {FriendsComponent} from '../friends/friends.component';
import {PaymentsComponent} from '../payments/payments.component';
import {RequestsComponent} from '../requests/requests.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static URL = 'home';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  home() {
    this.router.navigate([HomeComponent.URL]);
  }

  events() {
    this.router.navigate([HomeComponent.URL, EventsComponent.URL]);
  }

  friends() {
    this.router.navigate([HomeComponent.URL, FriendsComponent.URL]);
  }

  payments() {
    this.router.navigate([HomeComponent.URL, PaymentsComponent.URL]);
  }

  requests() {
    this.router.navigate([HomeComponent.URL, RequestsComponent.URL]);
  }
}
