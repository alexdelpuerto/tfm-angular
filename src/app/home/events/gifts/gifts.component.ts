import {Component, Input, OnInit} from '@angular/core';
import {Gifts} from './gifts.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {GiftsCreateDialogComponent} from './gifts-create-dialog/gifts-create-dialog.component';
import {ConfirmationDialogComponent} from '../../../core/confirmation-dialog.component';
import {GiftsService} from './gifts.service';
import {PaymentsService} from '../../payments/payments.service';
import {Payments} from '../../payments/payments.model';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})

export class GiftsComponent implements OnInit {

  static URL = 'gifts';
  title = 'Regalos';
  columns = ['name', 'price', 'description'];
  @Input() data: Gifts[];

  constructor(private dialog: MatDialog, private giftService: GiftsService, private paymentService: PaymentsService) {
    this.data = null;
  }

  ngOnInit() {
  }

  create() {
    const dialogConfig: MatDialogConfig = {
      data: {
        gift: {}
      }
    };

    this.dialog.open(GiftsCreateDialogComponent, dialogConfig).afterClosed().subscribe(
      response => {
        if (response) {
        }
      }
    );
  }

  buy(gift: Gifts) {
    let payment: Payments;
    payment = {
      id: null,
      buyer: sessionStorage.getItem('username'),
      giftname: gift.name,
      price: null
    };

    this.dialog.open(ConfirmationDialogComponent).afterClosed().subscribe(
      (response) => {
        if (response) {
          this.paymentService.create(payment).subscribe();
        }
      }
    );
  }
}
