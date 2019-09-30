import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { FuelList } from '../shared/model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {element} from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: FuelList[] = [];
  displayedColumns: string[] = ['station_name', 'city', 'fuel_type_code', 'owner_type_code', 'lpg_primary',
  'cards_accepted'];
  dataSource: any;
  markers: any[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  pageLength: number = 0;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getAllDataList();
  }

  private getAllDataList() {
    if (this.commonService.dataList.length) {
      this.initializeValues(this.commonService.dataList);
    } else {
      this.commonService.getDataList()
        .subscribe(response => {
          this.initializeValues(response);
        });
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
    this.pageLength = this.dataSource.data.length;
    this.currentPage = 0;
    this.addMarker();
  }

  addMarker() {
    const paginatedList = this.list.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
    this.markers = [];
    paginatedList.forEach(item => {
      this.markers.push({ lat: item.latitude, lng: item.longitude, alpha: 1, fuelType: item.fuel_type_code,
      geoCode: item.geocode_status, owner: item.owner_type_code, card: item.cards_accepted});
    });
  }

  setMarker(event) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.addMarker();
  }

  onMouseOver(infoWindow) {
    infoWindow.open();
  }

  onMouseOut(infoWindow) {
    infoWindow.close();
  }

  private initializeValues(response) {
    this.list = response;
    this.pageLength = this.list.length;
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.addMarker();
  }

}
