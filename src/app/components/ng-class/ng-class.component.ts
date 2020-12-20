import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {


  // Se puede cambiar los estilos de varias maneras
  // con una una clase apuntando a un String y otra con un objeto
  // en Html se hicieron validacion
  alerta = 'alert-info';

  propiedades: Object = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }

}
