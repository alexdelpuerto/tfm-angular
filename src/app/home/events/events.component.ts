import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventsService} from './events.service';
import {Events} from './events.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {EventsCreateDialogComponent} from './events-create-dialog/events-create-dialog.component';

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
  event: Events;

  constructor(private dialog: MatDialog, private eventService: EventsService, private router: Router) {
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

  create() {
    const dialogConfig: MatDialogConfig = {
      data: {
        event: {}
      }
    };
    this.dialog.open(EventsCreateDialogComponent, dialogConfig).afterClosed().subscribe(
      response => {
        if (response) {
          this.readAll();
        }
      }
    );
  }

  getGifts() {
    //this.router.navigate([EventsComponent.URL, GiftsComponent.URL]);
  }
}
