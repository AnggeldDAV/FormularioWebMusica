import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArtistaComponent } from './form-artista/form-artista.component';

const routes: Routes = [
  {
    path: "artista", component: FormArtistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
