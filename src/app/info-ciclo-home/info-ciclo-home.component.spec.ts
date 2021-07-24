import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCicloHomeComponent } from './info-ciclo-home.component';

describe('InfoCicloHomeComponent', () => {
  let component: InfoCicloHomeComponent;
  let fixture: ComponentFixture<InfoCicloHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCicloHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCicloHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
