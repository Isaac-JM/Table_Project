import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from 'src/app/services/db-service/db-service.service';
import { FilterService } from 'src/app/services/filter-service/filter.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private service: DbService, private filter: FilterService) { }
  jobs$: Observable<any> = this.filter.jobs;
  lines: number = 0;
  pages: number = 1;
  ngOnInit(): void {
    this.service.getDatas("getTareas").subscribe((res) => {
      this.filter.jobs.next(res.data)
      this.lines = res.data.length
    })

    this.jobs$.subscribe(res => this.lines = res.length)
  }


}
