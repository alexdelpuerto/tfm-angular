import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-events-create-dialog',
  templateUrl: './events-create-dialog.component.html',
  styleUrls: ['./events-create-dialog.component.css']
})
export class EventsCreateDialogComponent implements OnInit {

  eventForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  createEvent() {

  }
}
