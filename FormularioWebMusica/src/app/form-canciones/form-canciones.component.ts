import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-canciones',
  templateUrl: './form-canciones.component.html',
  styleUrl: './form-canciones.component.css'
})
export class FormCancionesComponent {
  formCanciones: FormGroup;
  mensaje: string = "";
  constructor(private fb: FormBuilder) {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let aaaa = today.getFullYear();
    let fecha = `${aaaa}-${mm}-${dd}`;
    
    this.formCanciones = this.fb.group({
      tituloCanciones: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$'), Validators.minLength(3), Validators.maxLength(10)]],
      generoCanciones: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$'), Validators.minLength(3), Validators.maxLength(10)]],
      artistaCanciones: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$'), Validators.minLength(3), Validators.maxLength(10)]],
      discoCanciones: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$'), Validators.minLength(3), Validators.maxLength(10)]],
      anyoCanciones: [fecha]
    });
  }

  onSubmit() {
    if (this.formCanciones.valid) {
      this.mensaje = "Formulario valido"
      console.log(this.formCanciones.value);
    } else {
      this.mensaje = "Formulario invalido"
    }
  }
}
