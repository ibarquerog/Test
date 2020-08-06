import { TestBed } from '@angular/core/testing';

import { AnotacionesService } from './anotaciones.service';

describe('AnotacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotacionesService = TestBed.get(AnotacionesService);
    expect(service).toBeTruthy();
  });
});
