import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { CommonService } from './shared/common.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTableModule,
  MatTabsModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDividerModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumTestComponent } from './breadcrum-test/breadcrum-test.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgChartjsModule } from 'ng-chartjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    BreadcrumTestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9Rhupg0pQERp36FntAK5RLJ62RYJBWNs'
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDividerModule,
    AppRoutingModule,
    BreadcrumbModule,
    NgChartjsModule.registerPlugin([])
  ],
  exports: [
    MatPaginatorModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
