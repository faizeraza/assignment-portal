import { TestBed } from '@angular/core/testing';

import { QuestionMapperService } from './question-mapper.service';

describe('QuestionMapperService', () => {
  let service: QuestionMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
