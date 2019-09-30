import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [], label: 'City' }
  ];

  constructor(private commonService: CommonService) { }
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

  private initializeValues(response) {
    const cityMap = new Map();
    response.forEach(item => {
      const key = item.city;
      if (cityMap.get(key)) {
        cityMap.set(key, cityMap.get(key) + 1);
      } else {
        cityMap.set(key, 1);
      }
    });
    for (const [key, value] of cityMap) {
      this.barChartLabels.push(key);
      this.barChartData[0].data.push(value);
    }
  }
}
