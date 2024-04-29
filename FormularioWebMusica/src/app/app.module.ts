import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { FormDiscoComponent } from './form-disco/form-disco.component'
import { FormArtistaComponent } from './form-artista/form-artista.component';
import { FormConciertoComponent } from './form-concierto/form-concierto.component';
import { FormCancionesComponent } from './form-canciones/form-canciones.component';


@NgModule({
  declarations: [
    AppComponent,
    FormUsuarioComponent,
    FormDiscoComponent,
    FormArtistaComponent,
    FormCancionesComponent,
    FormConciertoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule, 
    ReactiveFormsModule,
    FormDiscoComponent,
    FormArtistaComponent,
    FormCancionesComponent,
    FormConciertoComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
