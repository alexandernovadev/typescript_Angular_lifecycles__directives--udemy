import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      Solo css a este bloque,
      NOTA: SOLO LE AFECTA SI LO PONGO EN STYLES GLOBASLES
    </p>
  `,
  styles: [
    // Aqui lo unico que hace es poner estilos a solo este componente
    // Uy si !! gran cosa ;/
    `
    color: red
    `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
