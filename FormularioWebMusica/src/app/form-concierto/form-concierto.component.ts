import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-concierto',
  templateUrl: './form-concierto.component.html',
  styleUrl: './form-concierto.component.css'
})
export class FormConciertoComponent {
  formConcierto = new FormGroup({
    artistaConcierto: new FormControl(),
    lugarConcierto: new FormControl(),
    fechaConcierto: new FormControl(),
    generoConcierto: new FormControl()
  });


}
