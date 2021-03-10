import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { hireMe } from '../shared/hireMeInfo'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactMeService {
  url='https://portfolio-91e7a.firebaseio.com/spectactors.json';
  hireForm:hireMe={
    id:null,
    name:'',
    email:'',
    message:''
  }
  constructor(private http:HttpClient) { }

  saveHireMeInfo(hireInfo:any[]):Observable<hireMe>
  {
    return this.http.put<hireMe>(this.url,hireInfo)
  }
}
