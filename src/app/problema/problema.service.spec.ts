import { TestBed } from '@angular/core/testing';

import { ProblemaService } from './problema.service';

describe('ProblemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProblemaService = TestBed.get(ProblemaService);
    expect(service).toBeTruthy();
  });
});
