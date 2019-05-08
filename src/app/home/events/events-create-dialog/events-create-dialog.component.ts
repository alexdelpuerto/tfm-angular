import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Events} from '../events.model';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-events-create-dialog',
  templateUrl: './events-create-dialog.component.html',
  styleUrls: ['./events-create-dialog.component.css']
})
export class EventsCreateDialogComponent implements OnInit {

  event: Events;
  eventForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.event = data.event;
  }

  ngOnInit() {
    this.eventForm = new FormGroup({
      name: new FormControl(this.event.name, Validators.compose([Validators.required, Validators.maxLength(30)])),
      budget: new FormControl(this.event.budget, Validators.compose([Validators.required, Validators.min(0)]))
    });
  }

  createEvent() {

  }
}
