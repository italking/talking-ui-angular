import {Component, OnInit, AfterViewInit, ElementRef, Input, HostBinding, EventEmitter, Output} from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Highstock from 'highcharts/highstock';
import {HttpClient} from '@angular/common/http';
import {ChartObject} from 'highcharts';

@Component({
  selector: 'tk-chart',
  templateUrl: './tk-chart.component.html',
  styleUrls: ['./tk-chart.component.css']
})
export class TkChartComponent implements OnInit , AfterViewInit {
  public init = false;

  @HostBinding('style.display')
  public display = 'block';

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

  @Input('initFn')
  public initFn: Function;
  @Output('created')
  public created: EventEmitter<ChartObject> = new EventEmitter<ChartObject>() ;
  @Input('chartType')
  public chartType = 'chart';
  constructor(
    private element: ElementRef,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.init = true;
    this._create();
  }

  private _create() {
    if ( this.options == null || !this.init) {
        return;
    }
    this._emptyNode(this.element.nativeElement);
    if (this.url) {
      this.httpClient.get(this.url).subscribe((data) => {
        if (this.initFn) {
          data = this.initFn(data);
          const chart = this.chartType !== 'stock' ?
            Highcharts.chart(this.element.nativeElement, this._fixOptions(data)) :
            Highstock.chart(this.element.nativeElement, this._fixOptions(data));
          this.created.emit(chart);
        }
      });
    } else if (this.options) {
      const chart =  this.chartType !== 'stock' ?
            Highcharts.chart(this.element.nativeElement, this._fixOptions(this.options ) ) :
            Highstock.chart(this.element.nativeElement, this._fixOptions(this.options ) );
      this.created.emit(chart);
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
