import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConciertoComponent } from './form-concierto/form-concierto.component';
import { FormCancionesComponent } from './form-canciones/form-canciones.component';
import { FormArtistaComponent } from './form-artista/form-artista.component';
import { FormDiscoComponent } from './form-disco/form-disco.component';
const routes: Routes = [
  { path: 'formConciertos', component: FormConciertoComponent },
  { path: 'formCanciones', component: FormCancionesComponent },
  { path: 'formArtista', component: FormArtistaComponent },
  { path: 'formDisco', component: FormDiscoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
