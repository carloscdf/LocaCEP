import { TestBed } from '@angular/core/testing';

import { LocalizaCepService } from './localiza-cep.service';

describe('LocalizaCepService', () => {
  let service: LocalizaCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizaCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
