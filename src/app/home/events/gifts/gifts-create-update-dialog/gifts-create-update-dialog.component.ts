import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Gifts} from '../gifts.model';
import {GiftsService} from '../gifts.service';

@Component({
  selector: 'app-gifts-create-update-dialog',
  templateUrl: './gifts-create-update-dialog.component.html',
  styleUrls: ['./gifts-create-update-dialog.component.css']
})
export class GiftsCreateUpdateDialogComponent implements OnInit {

  gift: Gifts;
  giftForm: FormGroup;
  modeDialog: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private giftService: GiftsService) {
    this.gift = data.gift;
    this.modeDialog = data.mode;
  }

  ngOnInit() {
    this.giftForm = new FormGroup({
      name: new FormControl(this.gift.name, Validators.compose([Validators.required, Validators.maxLength(20)])),
      price: new FormControl(this.gift.price, Validators.compose([Validators.required, Validators.min(0)])),
      description: new FormControl(this.gift.description, Validators.maxLength(200)),
      eventId: new FormControl(Number.parseInt(sessionStorage.getItem('eventId'), 10))
    });
  }

  createOrEdit() {
    if (this.modeDialog === 'Crear') {
      this.createGift();
    } else {
      this.updateGift();
    }
  }

  createGift() {
    this.giftService.create(this.giftForm.value).subscribe(
      result => {
        if (result) {
          return true;
        }
      }
    );
  }

  updateGift() {
    this.giftService.update(this.gift.id, this.giftForm.value).subscribe(
      result => {
        if (result) {
          return true;
        }
      }
    );
  }
}
