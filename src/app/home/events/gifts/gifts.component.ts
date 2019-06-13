import {Component, Input, OnInit} from '@angular/core';
import {Gifts} from './gifts.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {GiftsCreateUpdateDialogComponent} from './gifts-create-update-dialog/gifts-create-update-dialog.component';
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
        gift: {},
        mode: 'Crear'
      }
    };

    this.dialog.open(GiftsCreateUpdateDialogComponent, dialogConfig).afterClosed().subscribe(
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

  edit(gift: Gifts) {
    let dialogConfig: MatDialogConfig = null;

    this.giftService.readGift(gift.id).subscribe(
      result => {
        dialogConfig = {
          data: {
            mode: 'Editar',
            gift: result['gift']
          }
        };

        this.dialog.open(GiftsCreateUpdateDialogComponent, dialogConfig).afterClosed().subscribe(
          response => {
            if (response) {
              this.giftService.readGifts(Number.parseInt(sessionStorage.getItem('eventId'), 10)).subscribe(
                giftList => this.data  = giftList
              );
            }
          }
        );
      }
    );
  }

  delete(gift: Gifts) {
    this.dialog.open(ConfirmationDialogComponent).afterClosed().subscribe(
      (response) => {
        if (response) {
          console.log("Borrado el regalo " + gift.name);
        }
      }
    );
  }
}
