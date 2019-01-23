import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'tk-date-picker',
  templateUrl: './tk-date-picker.component.html',
  styleUrls: ['./tk-date-picker.component.css']
})
export class TkDatePickerComponent implements OnInit {
  public currentData;
  public tempDate ;
  public showPanel = false;
  public days: any[][]; // {pre:false, date: 1 , next: false}
  public panelState = 'data'; // year month data
  public showTimer = true;
  public hs = [];
  public ss = [];
  public yindex = 0;
  public ysize  = 10;
  public yy = [];
  public showHour   = true;
  public showMin = false;
  @Input('date')
  public  set date(date: Date) {
    this.tempDate = date;
    this.currentData = new Date(date.getTime());
    this._initDays();
  }
  @Output() dateChange = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    if (target['tk-date']) {
      return false;
    }
    this.showPanel = false;
  }

  @HostListener('click', ['$event.target'])
  onPanelClick(target: HTMLElement) {
    target['tk-date'] = true;
  }

  constructor(
    private rel: ElementRef
  ) {
    this.date = new Date();
    for (let i = 0 ; i < 24 ; i++ ) {
      this.hs.push(i);
    }
    for (let i = 0 ; i < 60 ; i++ ) {
      this.ss.push(i);
    }
  }
  private _resetDate() {
    this._initDays();
  }
  private _initDays() {
    this.days = [];
    let day = this.getFirstDay();
    const current = this.tempDate.getDate();
    let week = [];
    const lastDate = this.getLastDate();
    this.days.push(week);
    for (let i = 1 ; i <= lastDate ; i++) {
          week[day] = {pre: false , date: i  , next : false , current: i === current};
          day += 1;
          if (day > 6) {
            day = 0;
            week = [];
            this.days.push(week);
          }
    }
  }
  public getLastDate() {
    return new Date(this.tempDate.getFullYear() , this.tempDate.getMonth() + 1 , 0 ).getDate();
  }
  public getFirstDay() {
    return new Date(this.tempDate.getFullYear() , this.tempDate.getMonth() , 1 ).getDay();
  }
  // 获取上个月的需要补充的天数
  public getPrevDates() {
  }
  public openYearPicker() {
    this._initYears();
    this.panelState = 'year';
  }

  private _initYears() {
    this.yy = [];
    let index = 0;
    let row = [];
    this.yy.push(row);
    for (let i = this.tempDate.getFullYear() + this.yindex * this.ysize ; i <= this.tempDate.getFullYear() + (this.yindex + 1 ) * this.ysize ; i++ ) {
      row.push(i);
      index += 1;
      if (index > 4) {
        index = 0;
        row = [];
        this.yy.push(row);
      }
    }
  }

  public openMonthPicker() {
    this.panelState = 'month';
  }

  public choseYear(y: number) {
    this.tempDate.setFullYear(y);
    this.panelState = 'data';
    this._resetDate();
  }

  public choseMonth(m: number) {
    this.tempDate.setMonth(m);
    this.panelState = 'data';
    this._resetDate();
  }
  public choseDate(date) {
    if (!date || date.current) {
      return ;
    }
    this.tempDate.setDate(date.date);
    this.panelState = 'data';
    this._resetDate();
  }

  public nextYears() {
    this.yindex ++;
    this._initYears();
  }
  public prevYears() {
    this.yindex --;
    this._initYears();
  }

  public nextMonth() {
    this.tempDate.setMonth(this.tempDate.getMonth() + 1);
    this._resetDate();
  }
  public nextYear() {
    this.tempDate.setFullYear(this.tempDate.getFullYear() + 1);
    this._resetDate();
  }
  public prevMonth() {
    this.tempDate.setMonth(this.tempDate.getMonth() - 1);
    this._resetDate();
  }
  public prevYear() {
    this.tempDate.setFullYear(this.tempDate.getFullYear() - 1);
    this._resetDate();
  }

  public saveDate() {
    this.currentData =   new Date(this.tempDate.getTime());
    this._resetDate();
    this.closePiker();
    this.dateChange.emit(this.currentData);
  }
  public currentDate() {
    const date = new Date();
    this.tempDate     =  new Date(date.getTime());
    this.currentData =   new Date(date.getTime());
    this._resetDate();
  }

  public openPicker() {
    this.showPanel = true;
    this.panelState = 'data';
    this.yindex = 0;
  }
  public closePiker() {
    this.showPanel = false;
  }

  public showHourPanel() {
    this.showHour = true;
    this.showMin = false;
  }

  public showMinPanel() {
    this.showHour   = false;
    this.showMin = true;
  }

  public setHour(c) {
    this.tempDate.setHours(c);
  }

  public setMin(c) {
    this.tempDate.setMinutes(c);
  }

  ngOnInit() {
  }

}
