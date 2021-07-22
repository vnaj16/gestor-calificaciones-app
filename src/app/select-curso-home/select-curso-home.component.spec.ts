import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCursoHomeComponent } from './select-curso-home.component';

describe('SelectCursoHomeComponent', () => {
  let component: SelectCursoHomeComponent;
  let fixture: ComponentFixture<SelectCursoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCursoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCursoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
