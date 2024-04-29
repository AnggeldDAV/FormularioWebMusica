import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormConciertoComponent } from './form-concierto/form-concierto.component';
import { FormCancionesComponent } from './form-canciones/form-canciones.component';
import { FormArtistaComponent } from './form-artista/form-artista.component';
import { FormDiscoComponent } from './form-disco/form-disco.component';
const routes: Routes = [
  { path: 'formConciertos', component: FormConciertoComponent },
  { path: 'formCanciones', component: FormCancionesComponent },
  { path: 'formArtista', component: FormArtistaComponent },
  { path: 'formDisco', component: FormDiscoComponent },
  { path: 'formUsuario', component: FormUsuarioComponent },
  { path: '', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
