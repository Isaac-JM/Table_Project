import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbService } from 'src/app/services/db-service/db-service.service';
import { DataService } from 'src/app/services/data-service/data-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private form: FormBuilder,private data:DataService,private service:DbService) { }
  states!:any[];
  types!:any[];
  filterForm: FormGroup = this.form.group({
    client: [''],
    ref: [''],
    user: [''],
    date: [''],
    date1: [''],
    type: ['TODOS'],
    Pendiente: [''],
    Recogiendo: [''],
    Recogida: [''],
    Desconsolidando: [''],
    Desconsolidada: [''],
    Entregada: [''],
    Incidencia: [''],
  })
  ngOnInit(): void {
    this.service.getDatas("getEstados").subscribe(res=>this.states=res.data)
    this.service.getDatas("getTipos").subscribe(res=>this.types=res.data)
    
  }

  resetClient() {
    this.filterForm.controls['client'].setValue("");
  }

  resetRef() {
    this.filterForm.controls['ref'].setValue("");
  }

  resetUser() {
    this.filterForm.controls['user'].setValue("");
  }

  resetDate() {
    this.filterForm.controls['date'].setValue("");
  }

  resetType() {
    this.filterForm.controls['type'].setValue("TODOS");
  }

search(){
this.data.form.next(this.filterForm);
}



}
