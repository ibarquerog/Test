import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdministradorComponent } from './new-administrador.component';

describe('NewAdministradorComponent', () => {
  let component: NewAdministradorComponent;
  let fixture: ComponentFixture<NewAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
