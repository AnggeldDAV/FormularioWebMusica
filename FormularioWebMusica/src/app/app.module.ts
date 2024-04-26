import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    FormDiscoComponent,
    FormArtistaComponent,
    FormCancionesComponent,
    FormConciertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    formDisco,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
