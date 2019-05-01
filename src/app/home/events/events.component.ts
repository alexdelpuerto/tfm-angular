import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  static URL = 'events';
  data: any;
  title = 'Eventos';
  columns = ['nombre', 'presupuesto', 'queda', 'creador'];


  constructor() {
    this.data = [
      {nombre: 'evento1', presupuesto: 23.4, queda: 20, creador: 'pepe'},
      {nombre: 'evento2', presupuesto: 20.4, queda: 18, creador: 'juan'}];
  }

  ngOnInit() {
  }

}
