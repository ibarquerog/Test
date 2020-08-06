import { TestBed } from '@angular/core/testing';

import { TipoColeccionService } from './tipo-coleccion.service';

describe('TipoColeccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoColeccionService = TestBed.get(TipoColeccionService);
    expect(service).toBeTruthy();
  });
});
