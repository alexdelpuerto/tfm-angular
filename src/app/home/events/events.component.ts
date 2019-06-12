import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EventsService} from './events.service';
import {Events} from './events.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {EventsCreateUpdateDialogComponent} from './events-create-update-dialog/events-create-update-dialog.component';
import {Gifts} from './gifts/gifts.model';
import {GiftsService} from './gifts/gifts.service';
import {MembersDialogComponent} from './members-dialog/members-dialog.component';

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
    this.data = null;
  }

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    this.readEvents();
  }

  readEvents() {
    this.eventService.readEvents(Number.parseInt(this.userId, 10)).subscribe(
      events => {this.data = events['events'];
      }
    );
  }

  create() {
    const dialogConfig: MatDialogConfig = {
      data: {
        event: {},
        mode: 'Crear'
      }
    };
    this.dialog.open(EventsCreateUpdateDialogComponent, dialogConfig).afterClosed().subscribe(
      response => {
        if (response) {
          this.readEvents();
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

  editMembers(event: Events) {
    let dialogConfig: MatDialogConfig;
    dialogConfig = {
      data: {
        eventId: event.id
      }
    };
    this.dialog.open(MembersDialogComponent, dialogConfig).afterClosed().subscribe();
  }

  edit(event: Events) {
    let dialogConfig: MatDialogConfig = null;

    this.eventService.readEvent(event.id).subscribe(
      result => {
        dialogConfig = {
          data: {
            mode: 'Editar',
            event: result['event']
          }
        };

        this.dialog.open(EventsCreateUpdateDialogComponent, dialogConfig).afterClosed().subscribe(
          response => {
            if (response) {
              this.eventService.readEvents(Number.parseInt(sessionStorage.getItem('userId'), 10)).subscribe(
                eventList => this.data  = eventList
              );
            }
          }
        );
      }
    );
  }
}
