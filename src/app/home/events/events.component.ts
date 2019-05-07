import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventsService} from './events.service';
import {Events} from './events.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  static URL = 'events';
  data: Events[];
  title = 'Eventos';
  columns = ['name', 'budget', 'creator'];
  userId: string;

  constructor(private eventService: EventsService, private router: Router) {
    this.data = [
      {name: null, budget: null, creator: null}];
  }

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    this.readAll();
  }

  readAll() {
    this.eventService.readAll(Number.parseInt(this.userId, 10)).subscribe(
      events => {this.data = events['events'];
      }
    );
  }
}
