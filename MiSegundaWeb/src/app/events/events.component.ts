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

  public container: string = "add";

  public evento: string;
  public ubicacion: string;
  public email: string;
  public descripcion: string;
  public imagen: string;

  constructor() { }

  ngOnInit(): void {

    this.events.push(new EventGallery('Rappel', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event1.jpg', 'Hooker Lake', 'quiim2000@gmail.com'));
    this.events.push(new EventGallery('Caminata', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event2.jpg', 'Hiking trail', 'victor202@gmail.com'));
    this.events.push(new EventGallery('Cayak', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event3.jpg', 'Wild river', 'quimmartinezpique@gmail.com'));
    this.events.push(new EventGallery('Escalada', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event4.jpg', 'Mount Fuji', 'autor12@gmail.com'));
    this.events.push(new EventGallery('Excursion Turistica', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event5.jpg', 'Cascade Lauzon', 'quiim2000@gmail.com'));
  }

  elegirAccion(event) {
    console.log(event.target.value);
    if(event.target.value == "add") {
      this.accion = "AÑADIR EVENTO";
      this.container = "add"
    } else if(event.target.value == "edit") {
      this.accion = "EDITAR EVENTO";
      this.container = "edit"
    } else if (event.target.value == "delete") {
      this.container = "delete"
      this.accion = "ELIMINAR EVENTO";
    } else {
      this.accion = "";
    }
  }

  enviarDatosAdd(event, ubi, email, descrip) {
    this.evento = event;
    this.ubicacion = ubi;
    this.email = email;
    this.descripcion = descrip;

    this.events.push(new EventGallery(this.evento, this.descripcion, 'assets/img-events/event1.jpg', this.ubicacion, this.email));
  }

}
