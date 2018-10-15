import { Component, OnInit , AfterViewInit , ElementRef , Input} from '@angular/core';
import * as Highcharts from 'highcharts';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tk-chart',
  templateUrl: './tk-chart.component.html',
  styleUrls: ['./tk-chart.component.css']
})
export class TkChartComponent implements OnInit , AfterViewInit {
  @Input()
  public height = -1;
  @Input()
  public url: string;

  public options: any;
  @Input('options')
  set setOptions(options) {
    this.options = options;
    this._create();
  }

  @Input()
  public initFn: Function;

  constructor(
    private element: ElementRef,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._create();
  }

  private _create() {
    if ( this.options == null) {
      return;
    }
    this._emptyNode(this.element.nativeElement);
    if (this.url) {
      this.httpClient.get(this.url).subscribe((data) => {
        if (this.initFn) {
          data = this.initFn(data);
          Highcharts.chart(this.element.nativeElement, this._fixOptions(data));
        }
      });
    } else if (this.options) {
      Highcharts.chart(this.element.nativeElement, this._fixOptions(this.options ) );
    }
  }

  private _emptyNode(node) {
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  }

  private _fixOptions(options): any {
    if (this.height > 0 ) {
      if (!options.chart) {
        options.chart = {};
      }
      options.chart.height = this.height;
    }
    return options;
  }
}
