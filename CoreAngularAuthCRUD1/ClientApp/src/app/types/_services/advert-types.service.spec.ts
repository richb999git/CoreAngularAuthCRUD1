import { TestBed } from '@angular/core/testing';

import { AdvertTypesService } from './advert-types.service';

describe('AdvertTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertTypesService = TestBed.get(AdvertTypesService);
    expect(service).toBeTruthy();
  });
});
