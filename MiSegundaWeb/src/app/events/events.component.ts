import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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

  public container: string;

  public evento: string;
  public ubicacion: string;
  public email: string;
  public descripcion: string;
  public imagen: string;

  public compEvent: boolean = true;
  public compDescrip: boolean = true;
  public compUbi: boolean = true;
  public compEmail: boolean = true;
  public compCheck: boolean = true;

  public mensajeError: string;

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

  enviarDatosAdd(event, ubi, email, descrip, img, check) {

    this.compEvent = true;
    this.compDescrip = true;
    this.compUbi = true;
    this.compEmail = true;
    this.compCheck = true;

    if(!(event && ubi && email && descrip)){
      this.mensajeError = "Los campos 'Evento', 'Ubicacion', 'Email' y 'Descripcion' deben estar rellenados";
      this.compEvent = false;
    }
    else if(check == false) {
      this.mensajeError = "Debes Aceptar condiciones para añadir el evento"
      this.compCheck = false;
    }
    else if(descrip.length < 2){
      this.mensajeError = "La descripcion debe ser de 2 o mas caracteres!"
      this.compDescrip = false;
    }
    else if(!email.includes('@')){
      this.mensajeError = "Debes añadir el simbolo @ a tu correo electronico!"
      this.compEmail = false;
    }

    if(this.compEvent && this.compCheck && this.compDescrip && this.compEmail){
       this.events.push(new EventGallery(event, descrip, img, ubi, email));
    }


  }


  eliminarEvento(event){

    for(var j = 0; j<this.events.length; j++) {

      if(this.events[j].tituloEv == event){

        this.events.splice( j, 1 );

      }

    }

  }




}
