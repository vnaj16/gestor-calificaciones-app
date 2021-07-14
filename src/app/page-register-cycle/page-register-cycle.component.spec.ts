import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegisterCycleComponent } from './page-register-cycle.component';

describe('PageRegisterCycleComponent', () => {
  let component: PageRegisterCycleComponent;
  let fixture: ComponentFixture<PageRegisterCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRegisterCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegisterCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
