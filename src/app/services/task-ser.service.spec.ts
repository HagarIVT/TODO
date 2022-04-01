import { TestBed } from '@angular/core/testing';

import { TaskSerService } from './task-ser.service';

describe('TaskSerService', () => {
  let service: TaskSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
