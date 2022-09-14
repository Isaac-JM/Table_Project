import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private http: HttpClient) { }
  url: string = environment.url;
  headers!: HttpHeaders;

  getDatas(get: string): Observable<any> {
    this.setHeader(get);
    return this.http.get<any>(this.url, { headers: this.headers });
  }

  private setHeader(funcion: string) {

    let token = CryptoJS.SHA384("POERTUBN" + this.formatDate())

    this.headers = new HttpHeaders()
      .set('funcion', funcion)
      .set('X-Auth', String(token));
  }

  private formatDate() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let stringMonth
    month > 9 ? stringMonth = String(month) : stringMonth = "0" + String(month);

    return String(date.getFullYear()) + stringMonth + String(date.getDate())

  }

}
