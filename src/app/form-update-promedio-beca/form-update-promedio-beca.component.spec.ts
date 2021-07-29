import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdatePromedioBecaComponent } from './form-update-promedio-beca.component';

describe('FormUpdatePromedioBecaComponent', () => {
  let component: FormUpdatePromedioBecaComponent;
  let fixture: ComponentFixture<FormUpdatePromedioBecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdatePromedioBecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdatePromedioBecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
