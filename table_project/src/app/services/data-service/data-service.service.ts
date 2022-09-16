import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }
  form:ReplaySubject<any>=new ReplaySubject;
  jobs:ReplaySubject<any>=new ReplaySubject;

}
