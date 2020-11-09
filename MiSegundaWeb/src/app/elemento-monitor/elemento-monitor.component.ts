import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-elemento-monitor',
  templateUrl: './elemento-monitor.component.html',
  styleUrls: ['./elemento-monitor.component.css']
})
export class ElementoMonitorComponent implements OnInit {

  @Input() monitor: Monitor;
  @Output() selectEvent = new EventEmitter<Monitor>();

  constructor() { }

  ngOnInit(): void {
  }

  monitorSelected(event){
    this.selectEvent.emit(this.monitor);
  }


}
