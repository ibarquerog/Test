import { TestBed } from '@angular/core/testing';

import { ConfiguracionUsuarioService } from './configuracion-usuario.service';

describe('ConfiguracionUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfiguracionUsuarioService = TestBed.get(ConfiguracionUsuarioService);
    expect(service).toBeTruthy();
  });
});
