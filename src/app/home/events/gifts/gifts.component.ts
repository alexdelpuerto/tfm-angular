import {Component, Input, OnInit} from '@angular/core';
import {Gifts} from './gifts.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {GiftsCreateDialogComponent} from './gifts-create-dialog/gifts-create-dialog.component';
import {ConfirmationDialogComponent} from '../../../core/confirmation-dialog.component';

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

  constructor(private dialog: MatDialog) {
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
    console.log(JSON.stringify(json));
    console.log(json['giftId']);
    console.log(json['buyer']);
    this.dialog.open(ConfirmationDialogComponent).afterClosed().subscribe(
      result => {
        if (result) {
          // this.giftService...
        }
      }
    );
  };
}
