import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  usuario: string = '';
  contrasena: string = '';
  email: string = '';

 onSubmit() {

  console.log('Usuario:', this.usuario);
  console.log('Contraseña:', this.contrasena);
  console.log('Email:', this.email);
}
}
