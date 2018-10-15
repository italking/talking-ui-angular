import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-tk-chart-info',
  templateUrl: './tk-chart-info.component.html',
  styleUrls: ['./tk-chart-info.component.css']
})
export class TkChartInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public  initCharData(data: any) {
  const options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Snow depth at Vikjafjellet, Norway'
      },
      subtitle: {
        text: 'Irregular time data in Highcharts JS'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%e. %b',
          year: '%b'
        },
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        title: {
          text: 'Snow depth (m)'
        },
        min: 0
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        formatter: function() {
          let str = Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br>';
         Object.keys(this.point.metricValue).forEach(name => {
            str += name + ': ' + this.point.metricValue[name] + '<br>';
         });
          return str;
        }
      },
      plotOptions: {
        spline: {
          marker: {
            enabled: true
          }
        }
      },
      colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
      series: []
    };

    const averageResponseTimeData = data.averageResponseTimeData;
    const serie = {'name': '响应时间', data: []};
           averageResponseTimeData.dataTimeslices.forEach(slice => {
             const date = new Date();
                    date.setTime(slice.startTime);
                    if (slice.metricValue) {
                      serie.data.push({x: date , y: slice.metricValue.value , metricValue: slice.metricValue });
                    } else {
                      serie.data.push({x: date , y: null , metricValue: {} });
                    }

           });
    options.series.push(serie);
    return options;
  }

}
