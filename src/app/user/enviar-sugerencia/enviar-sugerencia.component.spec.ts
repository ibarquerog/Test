import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarSugerenciaComponent } from './enviar-sugerencia.component';

describe('EnviarSugerenciaComponent', () => {
  let component: EnviarSugerenciaComponent;
  let fixture: ComponentFixture<EnviarSugerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarSugerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
