import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './views/form/form.component';
import { TableComponent } from './views/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './services/pipes/filter-date.pipe';
import { FilterPipe2 } from './services/pipes/filter-date.pipe';
import { FilterPipeText } from './services/pipes/filter-text.pipe';
import { FilterPipeText1 } from './services/pipes/filter-text.pipe';
import { FilterPipeText2 } from './services/pipes/filter-text.pipe';
import { FilterPipeText3 } from './services/pipes/filter-text.pipe';
import { FilterPipeCheck1 } from './services/pipes/filter-checkbox.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    FilterPipe,
    FilterPipe2,
    FilterPipeText,
    FilterPipeText1,
    FilterPipeText2,
    FilterPipeText3,
    FilterPipeCheck1,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
