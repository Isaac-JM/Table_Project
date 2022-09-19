import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  param !: HttpParams;
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

  getDatasFilter(get: string, option: any, date1: any, date2: any): Observable<any> {
    this.setHeader(get);
    return this.http.get<any>(this.url, this.options(this.headers, option, date1, date2));
  }

  private options(head: any, option: any, date1: any, date2: any) {

    let params = new HttpParams();
    option.type != 'TODOS' ? params = params.append('tipo', option.type) : '';
    option.user != '' ? params = params.append('usuario', option.user) : '';
    option.client != '' ? params = params.append('cliente', option.client) : '';
    option.ref != '' ? params = params.append('referencia', option.ref) : '';
    option.state != '' ? params = params.append('estado[]', option.state) : '';
    option.state1 != '' ? params = params.append('estado[]', option.state1) : '';
    option.state2 != '' ? params = params.append('estado[]', option.state2) : '';
    option.state3 != '' ? params = params.append('estado[]', option.state3) : '';
    option.state4 != '' ? params = params.append('estado[]', option.state4) : '';
    option.state5 != '' ? params = params.append('estado[]', option.state5) : '';
    option.state6 != '' ? params = params.append('estado[]', option.state6) : '';
    date1 != '' ? params = params.append('fecha[inicio]', date1) : '';
    date2 != '' ? params = params.append('fecha[fin]', date2) : '';

    return {
      headers: head,
      params: params
    }

  }

  private formatDate() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let stringMonth
    month > 9 ? stringMonth = String(month) : stringMonth = "0" + String(month);

    return String(date.getFullYear()) + stringMonth + String(date.getDate())

  }

}
