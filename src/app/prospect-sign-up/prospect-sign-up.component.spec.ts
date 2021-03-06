import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectSignUpComponent } from './prospect-sign-up.component';

describe('ProspectSignUpComponent', () => {
  let component: ProspectSignUpComponent;
  let fixture: ComponentFixture<ProspectSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
