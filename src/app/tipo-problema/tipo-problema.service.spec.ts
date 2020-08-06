import { TestBed } from '@angular/core/testing';

import { TipoProblemaService } from './tipo-problema.service';

describe('TipoProblemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoProblemaService = TestBed.get(TipoProblemaService);
    expect(service).toBeTruthy();
  });
});
