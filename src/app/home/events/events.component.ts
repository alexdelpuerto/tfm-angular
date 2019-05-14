import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EventsService} from './events.service';
import {Events} from './events.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {EventsCreateDialogComponent} from './events-create-dialog/events-create-dialog.component';
import {Gifts} from './gifts/gifts.model';
import {GiftsService} from './gifts.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  static URL = 'events';
  data: Events[];
  gifts: Gifts[];
  title = 'Eventos';
  columns = ['name', 'budget', 'creator'];
  userId: string;
  event: Events;
  @Output() emitter = new EventEmitter<Gifts[]>();

  constructor(private dialog: MatDialog, private eventService: EventsService, private giftService: GiftsService) {
    this.data = [
      {id: null, name: null, budget: null, creator: null}];
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

  getGifts(event: Events) {
    const eventId = this.data[this.data.indexOf(event)].id;
    sessionStorage.setItem('eventId', eventId.toString());
    this.giftService.readGifts(eventId).subscribe(
      gifts => {
        this.gifts = gifts['gifts'];
      }
    );
  }
}
