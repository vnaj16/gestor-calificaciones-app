import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCicloHomeComponent } from './select-ciclo-home.component';

describe('SelectCicloHomeComponent', () => {
  let component: SelectCicloHomeComponent;
  let fixture: ComponentFixture<SelectCicloHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCicloHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCicloHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
