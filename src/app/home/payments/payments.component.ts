import {Component, OnInit} from '@angular/core';
import {PaymentsService} from './payments.service';
import {PaymentsCol} from './paymentsCol.model';
import {Payments} from './payments.model';

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

  constructor(private paymentService: PaymentsService) {
    this.data = [
      {id: null, person: null, price: null, giftname: null}];

    this.data2 = [{id: 1, buyer: 'pepe', price: 23.1, giftname: 'regalito'}, {id: 2, buyer: 'buyer', price: 11, giftname: 'rega'}];
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.readAll();
  }

  readAll() {
    this.paymentService.readAll(this.username).subscribe(
      payments => {this.data = payments['collections'];
      }
    );
  }
}
