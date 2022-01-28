import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { DataService } from './data.service';

const sampleData:any[] = [
  {
     "deptno": "10",
     "dname": "Sales",
     "loc": "Hyd"
   },
   {
     "deptno": "20",
     "dname": "Accounts",
     "loc": "Hyd"
   },
 {
     "deptno": "30",
     "dname": "Sales",
     "loc": "Chennai"
   }
];


describe('DataService', () => {
  let service: DataService;
  let httpController: HttpTestingController;
  let tempData:any[]= [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should  return an Observable<any[]>', () => {
    service.getData().subscribe( (resData:any[]) => {
      tempData = resData;
      expect(resData.length).toBe(3);
    });

    const request = httpController.expectOne("http://localhost:3000/depts");
    request.flush(sampleData);
    httpController.verify();
  });


  it('should return an depts data', ( ) => {
    service.getData().subscribe(resData => {
      expect(resData).toEqual(sampleData);
    });

    const request = httpController.expectOne("http://localhost:3000/depts");
    request.flush(sampleData);
    httpController.verify();

  });
 });
