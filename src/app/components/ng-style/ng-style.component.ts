import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Esta es una Etiqueta
    </p>

    <button type="button" class="btn btn-outline-primary"
            (click)="tamano = tamano + 5">
    <i class="fa fa-plus" aria-hidden="true"></i>
    </button>

    <button type="button" class="btn btn-outline-primary"
            (click)="tamano = tamano - 5">
    <i class="fa fa-minus" aria-hidden="true"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano =  20;
  constructor() { }

  ngOnInit() {
  }

}
