import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCursoHomeComponent } from './info-curso-home.component';

describe('InfoCursoHomeComponent', () => {
  let component: InfoCursoHomeComponent;
  let fixture: ComponentFixture<InfoCursoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCursoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCursoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
