import {Component, OnInit} from '@angular/core';
import {PaymentsService} from './payments.service';
import {Payments} from './payments.model';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  static URL = 'payments';
  username: string;
  data: Payments[];
  title = 'Te Deben';
  columns = ['person', 'price', 'giftname'];

  constructor(private paymentService: PaymentsService) {
    this.data = [
      {id: null, person: null, price: null, giftname: null}];
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
