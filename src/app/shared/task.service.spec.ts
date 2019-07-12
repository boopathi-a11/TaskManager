import { TestBed, getTestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('TaskService', () => {
  let injector: TestBed;
  let service: TaskService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]
    });
    injector = getTestBed();
    service = injector.get(TaskService);
    httpMock = injector.get(HttpTestingController);
    

    

  
  });
});
  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule],
  //   providers: [TaskService]
  // }));

  // it('should be created', () => {
  //   const service: TaskService = TestBed.get(TaskService);
  //   expect(service).toBeTruthy();
  // });
//});
