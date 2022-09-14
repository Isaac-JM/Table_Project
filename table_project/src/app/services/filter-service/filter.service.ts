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
  array2: any[] = []

  search(form: FormGroup) {

    this.service.getDatas('getTareas').subscribe((res => {

      this.inputs(form, res);

      this.checkboxFilter(form, res);

      this.deleteDuplicateContent();

      this.jobs.next(this.array2)
      this.array2 = [];
    }))

  }
  private deleteDuplicateContent(){
    let array: any[] = [];

    for (let i = 0, len = this.array2.length; i < len; i++)
      array[this.array2[i]['id']] = this.array2[i];

    this.array2 = new Array();
    for (let key in array)
      this.array2.push(array[key]);
  }

  private inputs(form: FormGroup, res: any) {
    if (form.controls['client'].value !== "") {
      this.array = res.data.filter((re: string | any) => re.alias_cliente.includes(form.controls['client'].value));

      this.array2 = this.array2.concat(this.array)
    }

    if (form.controls['ref'].value !== "") {
      this.array = res.data.filter((re: string | any) => re.referencia.includes(form.controls['ref'].value));

      this.array2 = this.array2.concat(this.array)
    }

    if (form.controls['user'].value !== "") {
      this.array = res.data.filter((re: string | any) => re.usuario.includes(form.controls['user'].value));

      this.array2 = this.array2.concat(this.array)
    }

    if (form.controls['date'].value !== "" && form.controls['date1'].value !== "") {
      console.log(form.controls['date'].value)
      this.array = res.data.filter((re: string | any) => re.fecha >= form.controls['date'].value && re.fecha <= form.controls['date1'].value);

      this.array2 = this.array2.concat(this.array)
    }

    if (form.controls['type'].value !== "") {
      this.array = res.data.filter((re: string | any) => re.tipo === form.controls['type'].value);

      this.array2 = this.array2.concat(this.array)

      if (form.controls['type'].value === "TODOS") {
        this.array2 = res.data
      }
    }
  }

  private checkboxFilter(form: FormGroup, res: any) {
    if (form.controls['Pendiente'].value == true) {
      this.array = res.data.filter((re: string | any) => re.estado === "Pendiente");

      this.array2 = this.array2.concat(this.array)
    }

    if (form.controls['Desconsolidada'].value == true) {
      this.array = res.data.filter((re: string | any) => re.estado == "Desconsolidada")
      this.array2 = this.array2.concat(this.array)
    }

    if (form.controls['Recogiendo'].value == true) {
      this.array = res.data.filter((re: string | any) => re.estado === "Recogiendo")
      this.array2 = this.array2.concat(this.array)
    }


    if (form.controls['Recogida'].value == true) {
      this.array = res.data.filter((re: string | any) => re.estado === "Recogida")
      this.array2 = this.array2.concat(this.array)
    }

    if (form.controls['Desconsolidando'].value == true) {
      this.array = res.data.filter((re: string | any) => re.estado === "Desconsolidando")
      this.array2 = this.array2.concat(this.array)
    }


    if (form.controls['Entregada'].value == true) {
      this.array = res.data.filter((re: string | any) => re.estado == "Entregada")
      this.array2 = this.array2.concat(this.array)
    }

    if (form.controls['Incidencia'].value == true) {
      this.array = res.data.filter((re: string | any) => re.estado == "Incidencia")
      this.array2 = this.array2.concat(this.array)
    }
  }
}
