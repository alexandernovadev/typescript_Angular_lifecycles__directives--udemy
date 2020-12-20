import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sincrono',
  templateUrl: './sincrono.component.html',
  styleUrls: ['./sincrono.component.css']
})
export class SincronoComponent implements OnInit {

  loading: boolean;

  constructor() {
    this.loading = false;
  }

  ngOnInit() {
  }

  cargar(){
    this.loading = true;
    setTimeout(() => this.loading = false , 3000);
  }

}
