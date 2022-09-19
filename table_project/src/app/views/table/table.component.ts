import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { DbService } from 'src/app/services/db-service/db-service.service';
import { DataService } from 'src/app/services/data-service/data-service.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private service: DbService, private form: FormBuilder,private data:DataService) { }
  form$: Observable<any> = this.data.form;
  jobs$: Observable<any> = this.data.jobs;
  
  formInputs={client:'',type:'',state:'',state1:'',state2:'',state3:'',state4:'',state5:'',state6:'',ref:'',user:''}
  date: any;
  date1: any;
  lines: number = 0;
  pages: number = 1;
  ngOnInit(): void {
    this.service.getDatas("getTareas").subscribe((res) => {
      this.data.jobs.next(res.data)
      this.lines = res.data.length
    })

    this.formData();
  }


  formData() {
    this.form$.subscribe((res) => {
      this.formInputs.client = res.controls['client'].value
      this.formInputs.ref = res.controls['ref'].value
      this.formInputs.user = res.controls['user'].value
      this.formInputs.type = res.controls['type'].value
      this.formInputs.state = res.controls['Pendiente'].value == true ? "Pendiente" : '';
      this.formInputs.state1 = res.controls['Recogiendo'].value == true ? "Recogiendo" : '';
      this.formInputs.state2 = res.controls['Recogida'].value == true ? "Recogida" : '';
      this.formInputs.state3 = res.controls['Desconsolidando'].value == true ? "Desconsolidando" : '';
      this.formInputs.state4 = res.controls['Desconsolidada'].value == true ? "Desconsolidada" : '';
      this.formInputs.state5 = res.controls['Entregada'].value == true ? "Entregada" : '';
      this.formInputs.state6 = res.controls['Incidencia'].value == true ? "Incidencia" : '';
      this.date = res.controls['date'].value
      this.date1 = res.controls['date1'].value

      this.service.getDatasFilter("getTareas",this.formInputs,this.date,this.date1).subscribe((res) => {
        this.data.jobs.next(res.data)
        this.lines = res.data.length
      })
    })
    
  }
}
