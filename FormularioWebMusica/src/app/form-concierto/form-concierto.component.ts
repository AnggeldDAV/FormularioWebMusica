import { Component } from '@angular/core';

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
