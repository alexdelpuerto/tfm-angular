import {Component, Input, OnInit} from '@angular/core';
import {Gifts} from './gifts.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {GiftsCreateDialogComponent} from './gifts-create-dialog/gifts-create-dialog.component';
import {ConfirmationDialogComponent} from '../../../core/confirmation-dialog.component';
import {GiftsService} from './gifts.service';
import {PaymentsService} from '../../payments/payments.service';

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
    this.data = [
      {id: null, name: null, price: null, description: null, bought: null}
    ];
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
    const json = {
      giftId: gift.id,
      buyer: sessionStorage.getItem('username')
      };
    this.dialog.open(ConfirmationDialogComponent).afterClosed().subscribe(
      (response) => {
        if (response) {
          this.paymentService.create(JSON.stringify(json)).subscribe();
        }
      }
    );
  }
}
