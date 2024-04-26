import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCancionesComponent } from './form-canciones.component';

describe('FormCancionesComponent', () => {
  let component: FormCancionesComponent;
  let fixture: ComponentFixture<FormCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCancionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
