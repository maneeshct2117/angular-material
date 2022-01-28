import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Dept } from './models/dept';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  dataArray:any[] =  [];
  url:string  = "http://localhost:3000/depts";

  constructor(private httpObj: HttpClient) {

  }

  doWrongRequest():Observable<any>
  {
    let wrongUrl  = "http://localhost:3000/depts123";
    return this.httpObj.get(wrongUrl);
  }

  getAllDepartments():Observable<Dept[]>
  {
    /*
      const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
      const header = { 'Authorization' : `Bearer ${hardcodedToken}`};
	    return this.httpObj.get<Dept[]>(this.url, { headers: header});
    */

	  return this.httpObj.get<Dept[]>(this.url);
  }

  getDeptById(id:number):Observable<Dept>
  {
    return this.httpObj.get<Dept>(this.url + "/" + id);
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


  //  Customizing the response using RxJS operators

  getDeptsByLoc(location:string):Observable<Dept[]>
  {
    return this.httpObj.get<any[]>(this.url).pipe(
      map(res => {
        return  res.filter(item => item.loc == location);
    })
  );
  }

  getDeptNames():Observable<string[]>
  {
    return this.httpObj.get<any[]>(this.url).pipe(
      map(res => {
        return res.map(item => { return item.dname });
    })
    );
  }


  getDeptNameAndLoc():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.url).pipe(
      map(res => {
        return res.map(item => {
          return { 	dname: item.dname, loc : item.loc} });
    })
    );
  }

}
