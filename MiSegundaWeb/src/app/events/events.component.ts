import { Component, OnInit } from '@angular/core';
import { EventGallery } from '../models/event-gallery';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventGallery[] = [];
  accion: String;

  constructor() { }

  ngOnInit(): void {

    this.events.push(new EventGallery('Hooker Lake', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event1.jpg'));
    this.events.push(new EventGallery('Hiking trail', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event2.jpg'));
    this.events.push(new EventGallery('Wild river', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event3.jpg'));
    this.events.push(new EventGallery('Mount Fuji', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event4.jpg'));
    this.events.push(new EventGallery('Cascade Lauzon', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event5.jpg'));

  }

  elegirAccion(event) {
    console.log(event.target.value);
    if(event.target.value == "add") {
      this.accion = "AÑADIR EVENTO";
    } else if(event.target.value == "edit") {
      this.accion = "EDITAR EVENTO";
    } else if (event.target.value == "delete") {
      this.accion = "ELIMINAR EVENTO";
    } else {
      this.accion = "";
    }
  }

}
