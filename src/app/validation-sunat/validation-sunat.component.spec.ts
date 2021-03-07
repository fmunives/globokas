import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationSunatComponent } from './validation-sunat.component';

describe('ValidationSunatComponent', () => {
  let component: ValidationSunatComponent;
  let fixture: ComponentFixture<ValidationSunatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationSunatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationSunatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
