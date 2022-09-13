import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db-service/db-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private service: DbService) { }

  ngOnInit(): void {
    this.service.getDatas("getTareas").subscribe(res=>console.log(res))
  }

}
