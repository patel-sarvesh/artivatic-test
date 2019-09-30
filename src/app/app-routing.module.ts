import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { BreadcrumTestComponent } from './breadcrum-test/breadcrum-test.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home'} },
  { path: 'report', component: ChartComponent, data: { breadcrumb: 'Report'},
    children: [
      { path: 'breadcrumb-test', component: BreadcrumTestComponent, data: { breadcrumb: 'Test' } }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
