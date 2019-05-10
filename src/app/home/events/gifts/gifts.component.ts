import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})

export class GiftsComponent implements OnInit {

  static URL = 'gifts';
  title = 'Regalos';
  columns = ['name', 'description', 'price'];
  data = null;

  constructor() {
  }

  ngOnInit() {
  }

}
