import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-canciones',
  templateUrl: './form-canciones.component.html',
  styleUrl: './form-canciones.component.css'
})
export class FormCancionesComponent {
  formCanciones = new FormGroup({
    tituloCanciones: new FormControl(),
    generoCanciones: new FormControl(),
    artistaCanciones: new FormControl(),
    discoCanciones: new FormControl(),
    anyoCanciones: new FormControl(),
  })

  onSubmit() {
    console.log(this.formCanciones.value);
  }
}
