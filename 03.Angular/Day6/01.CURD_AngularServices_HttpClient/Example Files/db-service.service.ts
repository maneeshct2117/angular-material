import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  dataArray:any[] =  [];
  url:string  = "http://localhost:3000/depts";

  constructor(private httpObj: HttpClient) {

  }

  getAllDepartments():Observable<any>
  {
    return this.httpObj.get(this.url);
  }

  getDeptById(id:number):Observable<any>
  {
    return this.httpObj.get(this.url + "/" + id);
  }

  createDept(deptObj:any):Observable<any>
  {
    return this.httpObj.post(this.url, deptObj);
  }

  updateDept(deptObj:any):Observable<any>
  {
    let strUrl = this.url + "/" + deptObj.deptno;
    return this.httpObj.put(strUrl, deptObj);
  }

  deleteDept(id:number):Observable<any>
  {
    return this.httpObj.delete(this.url + "/" + id);
  }

}
