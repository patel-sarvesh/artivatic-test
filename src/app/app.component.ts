import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {BreadcrumbService} from 'angular-crumbs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'artivatic-test';
  breadcrumbs: any[] = [];

  constructor(private router: Router,
              private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      this.breadcrumbs = crumbs.map(c => this.toPrimeNgMenuItem(c));
    });
  }

  private toPrimeNgMenuItem(crumb) {
    return { label: crumb.displayName, url: `#${crumb.url}`};
  }
}
