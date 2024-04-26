import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-concierto',
  templateUrl: './form-concierto.component.html',
  styleUrl: './form-concierto.component.css'
})
export class FormConciertoComponent {
  formConcierto = new FormGroup({
    artistaConcierto: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9]*$')]),
    lugarConcierto: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9]*$')]),
    fechaConcierto: new FormControl(),
    generoConcierto: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9]*$')])
  });

  validar() {
    let errorArtista = document.getElementById('validacionArtista');
    let errorLugar = document.getElementById('validacionLugar');
    let errorGenero = document.getElementById('validacionGenero');

    if (this.formConcierto.valid) {
      if (errorArtista != null) errorArtista.innerHTML = '';
      if (errorLugar != null) errorLugar.innerHTML = '';
      if (errorGenero != null) errorGenero.innerHTML = '';
    }

    if (!this.formConcierto.get('artistaConcierto')?.valid) {
      if(errorArtista != null) errorArtista.innerHTML = 'Introduce un nombre de artista válido';
    } else {
      if(errorArtista != null) errorArtista.innerHTML = '';
    }
    if (!this.formConcierto.get('lugarConcierto')?.valid) {
      if (errorLugar != null) errorLugar.innerHTML = 'Introduce un lugar válido';
    } else {
      if (errorLugar != null) errorLugar.innerHTML = '';
    }
    if (!this.formConcierto.get('generoConcierto')?.valid) {
      if (errorGenero != null) errorGenero.innerHTML = 'Introduce un género válido';
    } else {
      if (errorGenero != null) errorGenero.innerHTML = '';
    }
  }
}
