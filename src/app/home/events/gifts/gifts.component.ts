import { Component, OnInit } from '@angular/core';
import {Gifts} from './gifts.model';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})

export class GiftsComponent implements OnInit {

  static URL = 'gifts';
  data: Gifts[];
  title = 'Regalos';
  columns = ['name', 'price', 'description'];

  constructor() {
    this.data = [
      {name: null, price: null, description: null}
    ];
  }

  ngOnInit() {
  }

}
