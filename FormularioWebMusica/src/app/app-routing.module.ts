import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConciertoComponent } from './form-concierto/form-concierto.component';

const routes: Routes = [
  { path: 'formConciertos', component: FormConciertoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
