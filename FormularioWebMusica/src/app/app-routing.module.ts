import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConciertoComponent } from './form-concierto/form-concierto.component';
import { FormCancionesComponent } from './form-canciones/form-canciones.component'

const routes: Routes = [
  { path: 'formConciertos', component: FormConciertoComponent },
  { path: 'formCanciones', component: FormCancionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
