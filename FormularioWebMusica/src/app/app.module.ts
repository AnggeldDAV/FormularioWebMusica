import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormConciertoComponent } from './form-concierto/form-concierto.component';
import { FormCancionesComponent } from './form-canciones/form-canciones.component';


@NgModule({
  declarations: [
    AppComponent,
    FormCancionesComponent,
    FormConciertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
