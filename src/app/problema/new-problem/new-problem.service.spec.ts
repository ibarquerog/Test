import { TestBed } from '@angular/core/testing';

import { NewProblemService } from './new-problem.service';

describe('NewProblemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewProblemService = TestBed.get(NewProblemService);
    expect(service).toBeTruthy();
  });
});
