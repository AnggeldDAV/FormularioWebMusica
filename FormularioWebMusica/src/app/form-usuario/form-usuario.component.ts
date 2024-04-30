import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  myForm: FormGroup;
  mensaje: string = "";

  constructor(
    public fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      usuario:  ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$'), Validators.minLength(3), Validators.maxLength(50)]],
      contrasena: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.mensaje = "Formulario valido"
    } else {
      this.mensaje = "Formulario invalido"
    }
  }
}
