import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db-service/db-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private service:DbService) { }
  jobs:any;
  lines:number=0;
  pages: number = 1;
  ngOnInit(): void {
    this.service.getDatas("getTareas").subscribe((res)=>{
      this.jobs=res.data
      this.lines=this.jobs.length
    })
  }

}
