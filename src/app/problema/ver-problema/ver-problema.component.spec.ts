import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProblemaComponent } from './ver-problema.component';

describe('VerProblemaComponent', () => {
  let component: VerProblemaComponent;
  let fixture: ComponentFixture<VerProblemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerProblemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
