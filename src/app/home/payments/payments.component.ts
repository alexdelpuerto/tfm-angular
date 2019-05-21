import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  static URL = 'payments';
  data: any;
  title = 'Te Deben';
  columns = ['person', 'totalPrice'];

  constructor() {
    this.data = [
      {person: 'User1', totalPrice: 13.3}, {person: 'User2', totalPrice: 10}];
  }

  ngOnInit() {
  }

}
