import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { SincronoComponent } from './components/sincrono/sincrono.component';
import { NgSwithComponent } from './components/ng-swith/ng-swith.component';
import { HomeComponent } from './components/home/home.component';
import { APPROUTING } from './app.routes';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClassComponent,
    SincronoComponent,
    NgSwithComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    APPROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
