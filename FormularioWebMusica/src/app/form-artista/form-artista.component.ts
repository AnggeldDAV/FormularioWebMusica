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
    artistasNombre: new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    artistasAnyo: new FormControl(null),
    artistasGrupo: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    artistasGenero: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    artistasAlbum: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)])
  })

  //submit() {
  //  if (this.formArtistas.valid)
  //    this.resultado = "Todos los datos son válidos";
  //  else
  //    this.resultado = "Hay datos inválidos en el formulario";
  //}

}
