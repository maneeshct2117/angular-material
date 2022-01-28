import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
} )
export class DataService {

  dataArray:any[] =  [];
  url:string  = "http://localhost:3000/emps";


  constructor(private httpObj: HttpClient) {

  }

  getData():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.url).pipe(delay(3000));
  }

  getDataById(id:number) : Observable<any>
  {
    return this.httpObj.get<any>(`${this.url}/${id}`);
  }
}
