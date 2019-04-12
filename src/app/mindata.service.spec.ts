import { TestBed } from '@angular/core/testing';

import { MindataService } from './mindata.service';

describe('MindataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MindataService = TestBed.get(MindataService);
    expect(service).toBeTruthy();
  });
});
