import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLanguageComponent } from './auth-language.component';

describe('AuthLanguageComponent', () => {
  let component: AuthLanguageComponent;
  let fixture: ComponentFixture<AuthLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
