import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-nosaltres',
  templateUrl: './nosaltres.component.html',
  styleUrls: ['./nosaltres.component.css']
})
export class NosaltresComponent implements OnInit {

  monitorSeleccionado: Monitor;
  constructor() { }

  ngOnInit(): void {


  }



  cambiarMonitorSeleccionado(monitor) {
    this.monitorSeleccionado = monitor;
  }



}
