import { TestBed } from '@angular/core/testing';

import { BookApiService } from './services/book-api.service';

describe('BookApiService', () => {
  let service: BookApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
