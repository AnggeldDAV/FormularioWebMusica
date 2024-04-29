import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-disco',
  templateUrl: './form-disco.component.html',
  styleUrl: './form-disco.component.css'
})
export class FormDiscoComponent {
  formDisco = new FormGroup({
    anyoDisco: new FormControl(Validators.required),
    generoDisco: new FormControl("",Validators.required),
    tituloDisco: new FormControl("",Validators.required),
    artistaDisco: new FormControl("",Validators.required),
    portadaDisco: new FormControl("",Validators.required),
  })
}
