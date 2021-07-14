import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegisterGradeComponent } from './page-register-grade.component';

describe('PageRegisterGradeComponent', () => {
  let component: PageRegisterGradeComponent;
  let fixture: ComponentFixture<PageRegisterGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRegisterGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegisterGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
