import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-detalle-monitores',
  templateUrl: './detalle-monitores.component.html',
  styleUrls: ['./detalle-monitores.component.css']
})
export class DetalleMonitoresComponent implements OnInit {

  @Input() monitor: Monitor;

  constructor() { }

  ngOnInit(): void {
    this.monitor = new Monitor('','','','',0);
  }



}
