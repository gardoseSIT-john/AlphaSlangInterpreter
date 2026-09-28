import { TestBed } from '@angular/core/testing';
import { AlphaTermsService } from './alpha-terms-service';

describe('AlphaTermsService', () => {
  let service: AlphaTermsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlphaTermsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
