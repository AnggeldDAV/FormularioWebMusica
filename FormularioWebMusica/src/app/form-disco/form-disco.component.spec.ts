import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiscoComponent } from './form-disco.component';

describe('FormDiscoComponent', () => {
  let component: FormDiscoComponent;
  let fixture: ComponentFixture<FormDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDiscoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
