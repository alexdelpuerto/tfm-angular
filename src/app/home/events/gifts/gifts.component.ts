import {Component, Input, OnInit} from '@angular/core';
import {Gifts} from './gifts.model';

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

  constructor() {
    this.data = [
      {name: null, price: null, description: null}
    ];
  }

  ngOnInit() {
  }
}
