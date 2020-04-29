import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlimComponent } from './alim/alim.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ApiModule } from './api';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AlimComponent,
    HomeComponent,
    ServiceComponent,
    FilterPipe,





  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
