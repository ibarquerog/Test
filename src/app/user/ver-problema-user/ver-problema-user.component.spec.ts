import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProblemaUserComponent } from './ver-problema-user.component';

describe('VerProblemaUserComponent', () => {
  let component: VerProblemaUserComponent;
  let fixture: ComponentFixture<VerProblemaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerProblemaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProblemaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
