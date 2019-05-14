import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {EventsService} from '../events.service';
import {Gifts} from '../gifts/gifts.model';

@Component({
  selector: 'app-gifts-create-dialog',
  templateUrl: './gifts-create-dialog.component.html',
  styleUrls: ['./gifts-create-dialog.component.css']
})
export class GiftsCreateDialogComponent implements OnInit {

  gift: Gifts;
  giftForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private eventService: EventsService) {
    this.gift = data.gift;
  }

  ngOnInit() {
    this.giftForm = new FormGroup({
      name: new FormControl(this.gift.name),
      price: new FormControl(this.gift.price),
      description: new FormControl(this.gift.description),
      eventId: new FormControl(Number.parseInt(sessionStorage.getItem('eventId'), 10))
    });
  }

  createGift() {
    console.log(this.giftForm.value);
    /*
    this.eventService.createGift(this.giftForm.value).subscribe(result => {
      if (result) {
        return true;
      }
    });*/
  }
}
