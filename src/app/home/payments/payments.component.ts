import {Component, OnInit} from '@angular/core';
import {PaymentsService} from './payments.service';
import {PaymentsCol} from './paymentsCol.model';
import {Payments} from './payments.model';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../../core/confirmation-dialog.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  static URL = 'payments';
  username: string;
  data: PaymentsCol[];
  data2: Payments[];
  title = 'Te Deben';
  title2 = 'Debes';
  columns = ['person', 'price', 'giftname'];
  columns2 = ['buyer', 'price', 'giftname'];

  constructor(private paymentService: PaymentsService, private dialog: MatDialog) {
    this.data = [
      {id: null, person: null, price: null, giftname: null}];

    this.data2 = [
      {id: null, buyer: null, price: null, giftname: null}];
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.readAllCollections();
    this.readAllPayments();
  }

  readAllCollections() {
    this.paymentService.readAllCollections(this.username).subscribe(
      payments => {this.data = payments['collections'];
      }
    );
  }

  readAllPayments() {
    this.paymentService.readAllPayments(this.username).subscribe(
      payments => {this.data2 = payments['payments'];
      }
    );
  }

  delete($paymentsCol: PaymentsCol) {
    this.dialog.open(ConfirmationDialogComponent).afterClosed().subscribe(
      (response) => {
        if (response) {
          console.log($paymentsCol.id);
        }
      }
    );
  }
}
