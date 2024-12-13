import { TestBed } from '@angular/core/testing';

import { ListEmployeeService } from './list-employees.service';

describe('ListEmployeesService', () => {
  let service: ListEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
