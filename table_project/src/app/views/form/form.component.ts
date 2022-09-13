import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private form: FormBuilder) { }
  filterForm: FormGroup = this.form.group({
    client: [''],
    ref: [''],
    user: [''],
    date: [''],
    type: [''],
    state: [false],
    state1: [false],
    state2: [false],
    state3: [false],
    state4: [false],
    state5: [false],
    state6: [false],
  })
  ngOnInit(): void {

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
    this.filterForm.controls['type'].setValue("");
  }



}
