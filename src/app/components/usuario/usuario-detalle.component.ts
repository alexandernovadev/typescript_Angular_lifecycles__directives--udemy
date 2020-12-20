import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      Detalle AQUI
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(
    private activedroute: ActivatedRoute
    ) {

    // Aca trae el parametro mas facil que suscibirse.

    /* Algo asi:}
      this.router.parent.params.subscribe( params => {
            console.log('Ruta Hija Detalle');
            console.log(params);

            OJO CON EL PARENT
    */

    // OJO con  '   .parent '  como para subir un nivel. AL padre WOW
    // Me salia null porque no lo puse
    console.log('Este es el ID ' +
     this.activedroute.parent.snapshot.paramMap.get('id'));

   }

  ngOnInit() {
  }

}
