import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-lista-monitores',
  templateUrl: './lista-monitores.component.html',
  styleUrls: ['./lista-monitores.component.css']
})
export class ListaMonitoresComponent implements OnInit {

  monitor: Monitor[] = [];
  @Output() informarEvent = new EventEmitter<Monitor>();

  constructor() { }

  ngOnInit(): void {

    this.monitor.push(new Monitor('Alejandro', 'García', 'Monitor de Senderismo', 'assets/img-monitors/1.jpg', 26));
    this.monitor.push(new Monitor('Jorge', 'Gomez', 'Monitor Campamento Escolar', 'assets/img-monitors/2.jpg', 23));
    this.monitor.push(new Monitor('Juan', 'Martínez', 'Monitor de Escalada', 'assets/img-monitors/3.jpg', 32));
    this.monitor.push(new Monitor('Sandra', 'Pérez', 'Monitora de Canoa', 'assets/img-monitors/4.jpg', 20));
    this.monitor.push(new Monitor('Marta', 'Sanchez', 'Monitora de Excursiones', 'assets/img-monitors/5.jpg', 22));

  }

  informarMonitor(event) {
    this.informarEvent.emit(event);
  }


}
