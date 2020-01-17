import { TestBed, async } from '@angular/core/testing';
import { AdvertTypesService } from './advert-types.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('AdvertTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],  // added
    providers: [      
      { provide: 'BASE_URL', useValue: document.getElementsByTagName('base')[0].href }
    ]   // added, not sure this will work for actual mocking later though
  }));


  it('should be created', () => {
    const service: AdvertTypesService = TestBed.get(AdvertTypesService);
    expect(service).toBeTruthy();
  });
});
