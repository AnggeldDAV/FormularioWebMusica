import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-artista',
  templateUrl: './form-artista.component.html',
  styleUrl: './form-artista.component.css'
})
export class FormArtistaComponent {
  title = 'FormularioWebMusica';
  resultado!: string;
  formArtistas = new FormGroup({
    artistasNombre: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9ñÑ]*$')]),
    artistasAnyo: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.min(1900)]),
    artistasGrupo: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9ñÑ]*$')]),
    artistasGenero: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9ñÑ]*$')]),
    artistasAlbum: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('^[a-zA-Z0-9ñÑ]*$')])
  })

  //submit() {
  //  if (this.formArtistas.valid)
  //    this.resultado = "Todos los datos son válidos";
  //  else
  //    this.resultado = "Hay datos inválidos en el formulario";
  //}

  enviar() {
    let errorNombre = document.getElementById('artistasNombreValidar');
    let errorAnyo = document.getElementById('artistasAnyoValidar');
    let errorGrupo = document.getElementById('artistasGrupoValidar');
    let errorGenero = document.getElementById('artistasGeneroValidar');
    let errorAlbum = document.getElementById('artistasAlbumValidar');
    

    if (this.formArtistas.valid) {

      if (errorNombre != null) errorNombre.innerHTML = '';
      if (errorAnyo != null) errorAnyo.innerHTML = '';
      if (errorGrupo != null) errorGrupo.innerHTML = '';
      if (errorGenero != null) errorGenero.innerHTML = '';
      if (errorAlbum != null) errorAlbum.innerHTML = '';
    }

    if (!this.formArtistas.get('artistasNombre')?.valid) {
      if (errorNombre != null) errorNombre.innerHTML = 'Introduce un nombre de artista válido';
    } else {
      if (errorNombre != null) errorNombre.innerHTML = '';
    }
    if (!this.formArtistas.get('artistasAnyo')?.valid) {
      if (errorAnyo != null) errorAnyo.innerHTML = 'Introduce un año válido';
    } else {
      if (errorAnyo != null) errorAnyo.innerHTML = '';
    }
    if (!this.formArtistas.get('artistasGrupo')?.valid) {
      if (errorGrupo != null) errorGrupo.innerHTML = 'Introduce un nombre de grupo válido';
    } else {
      if (errorGrupo != null) errorGrupo.innerHTML = '';
    }
    if (!this.formArtistas.get('artistasGenero')?.valid) {
      if (errorGenero != null) errorGenero.innerHTML = 'Introduce un género de música válido';
    } else {
      if (errorGenero != null) errorGenero.innerHTML = '';
    }
    if (!this.formArtistas.get('artistasAlbum')?.valid) {
      if (errorAlbum != null) errorAlbum.innerHTML = 'Introduce un álbum válido';
    } else {
      if (errorAlbum != null) errorAlbum.innerHTML = '';
    }
  }

  reset() {
    let errorNombre = document.getElementById('artistasNombreValidar');
    let errorAnyo = document.getElementById('artistasAnyoValidar');
    let errorGrupo = document.getElementById('artistasGrupoValidar');
    let errorGenero = document.getElementById('artistasGeneroValidar');
    let errorAlbum = document.getElementById('artistasAlbumValidar');

    if (errorNombre != null) errorNombre.innerHTML = '';
    if (errorAnyo != null) errorAnyo.innerHTML = '';
    if (errorGrupo != null) errorGrupo.innerHTML = '';
    if (errorGenero != null) errorGenero.innerHTML = '';
    if (errorAlbum != null) errorAlbum.innerHTML = '';
  }



}
