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

  getTokenForValidUser(uid:string, pwd:string) : Observable<any>
  {
    let userObj:any = { "email": uid,   "password": pwd  };
    let authUrl:string  = "http://localhost:3000/login";
    return this.httpObj.post(authUrl, userObj);
  }

}
