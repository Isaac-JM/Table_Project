import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { DbService } from '../db-service/db-service.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private service: DbService) { }
  jobs: ReplaySubject<any[]> = new ReplaySubject();
  array: any[] = []
  array3: any[] = []
  search(form: FormGroup) {
    console.log(form.controls)
    this.service.getDatas('getTareas').subscribe((res => {

     
      
      if (form.controls['client'].value !== "") {
        this.array = res.data.filter((re: string | any) => re.alias_cliente.includes(form.controls['client'].value));

        this.array3 = this.array3.concat(this.array)
      }

      if (form.controls['ref'].value !== "") {
        this.array = res.data.filter((re: string | any) => re.referencia.includes(form.controls['ref'].value));

        this.array3 = this.array3.concat(this.array)
      }

      if (form.controls['user'].value !== "") {
        this.array = res.data.filter((re: string | any) => re.usuario.includes(form.controls['user'].value));

        this.array3 = this.array3.concat(this.array)
      }

      if (form.controls['date'].value !== "" && form.controls['date1'].value !== "") {
        console.log(form.controls['date'].value)
        this.array = res.data.filter((re: string | any) => re.fecha>=form.controls['date'].value && re.fecha<=form.controls['date1'].value);

        this.array3 = this.array3.concat(this.array)
      }

      if (form.controls['type'].value !== "") {
        this.array = res.data.filter((re: string | any) => re.tipo===form.controls['type'].value);

        this.array3 = this.array3.concat(this.array)

        if (form.controls['type'].value === "TODOS") {
          this.array3=res.data
        }
      }

      if (form.controls['Pendiente'].value == true) {
        this.array = res.data.filter((re: string | any) => re.estado === "Pendiente");

        this.array3 = this.array3.concat(this.array)
      }

      if (form.controls['Desconsolidada'].value == true) {
        this.array = res.data.filter((re: string | any) => re.estado == "Desconsolidada")
        this.array3 = this.array3.concat(this.array)
      }

      if (form.controls['Recogiendo'].value == true) {
        this.array = res.data.filter((re: string | any) => re.estado === "Recogiendo")
        this.array3 = this.array3.concat(this.array)
      }


      if (form.controls['Recogida'].value == true) {
        this.array = res.data.filter((re: string | any) => re.estado === "Recogida")
        this.array3 = this.array3.concat(this.array)
      }

      if (form.controls['Desconsolidando'].value == true) {
        this.array = res.data.filter((re: string | any) => re.estado === "Desconsolidando")
        this.array3 = this.array3.concat(this.array)
      }


      if (form.controls['Entregada'].value == true) {
        this.array = res.data.filter((re: string | any) => re.estado == "Entregada")
        this.array3 = this.array3.concat(this.array)
      }

      if (form.controls['Incidencia'].value == true) {
        this.array = res.data.filter((re: string | any) => re.estado == "Incidencia")
        this.array3 = this.array3.concat(this.array)
      }

      let array: any[] = [];

      for (var i = 0, len = this.array3.length; i < len; i++)
        array[this.array3[i]['id']] = this.array3[i];

      this.array3 = new Array();
      for (var key in array)
        this.array3.push(array[key]);






      this.jobs.next(this.array3)
      this.array3 = [];
    }))

  }
}
