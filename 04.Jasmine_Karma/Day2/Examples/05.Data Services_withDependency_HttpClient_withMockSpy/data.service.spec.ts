import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';


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
   },
   {
    "deptno": "40",
    "dname": "Operations",
    "loc": "Pune"
  }
];


describe('DataService', () => {
  let service: DataService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new DataService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should  return an Observable<any[]>', () => {

    httpClientSpy.get.and.returnValue(of(sampleData));

    service.getData().subscribe( (resData:any[]) => {
      expect(resData.length).toBe(4);
    });

  });


  it('should  return depts data', () => {
    httpClientSpy.get.and.returnValue(of(sampleData));

    service.getData().subscribe( (resData:any[]) => {
      expect(resData).toBe(sampleData);
    });
  });


  it('should perform post operation',   ( done:DoneFn ) => {

    let obj:any = { "deptno": "50", "dname": "Testing",  "loc": "Hyd"   };
    httpClientSpy.post.and.returnValue(of(obj));

    service.addData(obj).subscribe(
      (resData:any) => {
        expect(resData).toEqual(obj);
        done();
      },
      done.fail
    );

    expect(httpClientSpy.post.calls.count()).toBe(1);
  });





 });
