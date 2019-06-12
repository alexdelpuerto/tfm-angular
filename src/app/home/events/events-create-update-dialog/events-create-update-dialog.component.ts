import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Events} from '../events.model';
import {MAT_DIALOG_DATA} from '@angular/material';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-events-create-update-dialog',
  templateUrl: './events-create-update-dialog.component.html',
  styleUrls: ['./events-create-update-dialog.component.css']
})

export class EventsCreateUpdateDialogComponent implements OnInit {

  event: Events;
  eventForm: FormGroup;
  modeDialog: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private eventService: EventsService) {
    this.event = data.event;
    this.modeDialog = data.mode;
  }

  ngOnInit() {
    this.eventForm = new FormGroup({
      name: new FormControl(this.event.name, Validators.compose([Validators.required, Validators.maxLength(30)])),
      budget: new FormControl(this.event.budget, Validators.compose([Validators.required, Validators.min(0)])),
      creator: new FormControl(sessionStorage.getItem('username'))
    });
  }

  createOrEdit() {
    if (this.modeDialog === 'Crear') {
      this.createEvent();
    } else {
      this.updateEvent();
    }
  }

  createEvent() {
    this.eventService.create(this.eventForm.value).subscribe(result => {
      if (result) {
        return true;
      }
    });
  }

  updateEvent() {
    this.eventService.update(this.event.id, this.eventForm.value).subscribe(
      result => {
        if (result) {
          return true;
        }
      }
    );
  }
}
