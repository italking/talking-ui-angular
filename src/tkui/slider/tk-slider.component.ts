import {Component, ElementRef, OnInit, Output, EventEmitter, Input, ViewChild, Renderer2, HostListener} from '@angular/core';

@Component({
  selector: 'app-tk-slider',
  templateUrl: './tk-slider.component.html',
  styleUrls: ['./tk-slider.component.css']
})

export class TkSliderComponent implements OnInit {
  @Input()
  public maxValue = 100;
  @Input()
  public minValue = 0;
  @Input()
  public vertical = true;
  @Input()
  public rang     = false;
  @Input()
  public length    = 200;


  public offsetXRealFirst = 0;
  public offsetXFirst = 0;

  public offsetXRealSecond = 0;
  public offsetYRealSecond = 0;

  public offsetXSecond = 0;
  public offsetYSecond = 0;

  private isMousedownSecond = false;
  private isMousedownFirst = false;

  // values percentage
  private firstVal = 0;
  private secondVal = 1;

  // margin of circle
  private margin = 0;

  // private sliderElement: any;
  @Output()
  public change = new EventEmitter();

  @ViewChild('simpleSlider')
  private sliderElement: any;

  @ViewChild('circleSecond')
  private circleSecond: any;
  /**
   * 拖拽按钮大小
   * @type {number}
   */
  @Input()
  public size = 16;


  constructor(private renderer: Renderer2) { }

  public ngOnInit() {
    this.margin = this.size;
    if (this.vertical) {
      this.offsetYSecond = this.margin ;
      this.renderer.setStyle(this.circleSecond.nativeElement, 'bottom' , this.offsetYSecond + 'px');
    }
  }

  public mousedownFirst(event: any) {
    this.isMousedownFirst = true;
  }

  public mousedownSecond(event: any) {
    console.log('start');
    this.isMousedownSecond = true;
  }

  /**
   * 释放拖动
   */
  private putBack() {
    this.isMousedownFirst = false;
    this.isMousedownSecond = false;
    if (this.offsetXFirst < -this.margin) {
      this.offsetXFirst = -this.margin;
    }
    if (this.offsetXSecond < -this.margin) {
      this.offsetXSecond = -this.margin;
    }
  }

  public mousemoveFirst(event: any) {
    if (!this.vertical) {
      if (this.isMousedownFirst) {
        this.offsetXFirst += event.movementX;
        if (this.offsetXFirst >= -this.margin && this.offsetXFirst <= this.sliderElement.nativeElement.offsetWidth - this.margin) {
          this.offsetXRealFirst = this.offsetXFirst;
          this.firstVal = (this.offsetXFirst + this.margin) / (this.sliderElement.nativeElement.offsetWidth);
          this.emitChanges();
        }
      }
    } else {

    }

  }

  public mousemoveSecond(event: any) {
    if (!this.vertical) {
      if (this.isMousedownSecond) {
        this.offsetXSecond += -event.movementX;
        if (this.offsetXSecond >= -this.margin && this.offsetXSecond <= this.sliderElement.nativeElement.offsetWidth - this.margin) {
          this.offsetXRealSecond = this.offsetXSecond;
          this.secondVal = 1 - (this.offsetXSecond + this.margin) / (this.sliderElement.nativeElement.offsetWidth);
          this.emitChanges();
        }
      }
    } else {
      if (this.isMousedownSecond) {
        this.offsetYSecond += -event.movementY;
        if (this.offsetYSecond < this.margin) {
          this.offsetYSecond = this.margin;
        }
        if (this.offsetYSecond > this.sliderElement.nativeElement.offsetHeight) {
          this.offsetYSecond = this.sliderElement.nativeElement.offsetHeight;
        }
        if (this.offsetYRealSecond !== this.offsetYSecond ) {
          this.offsetYRealSecond = this.offsetYSecond;
          this.renderer.setStyle(this.circleSecond.nativeElement , 'bottom',  this.offsetYRealSecond + 'px');
          this.secondVal = (this.offsetYRealSecond - this.margin) / (this.sliderElement.nativeElement.offsetHeight - this.margin );
          this.change.next((this.maxValue - this.minValue) * this.secondVal + this.minValue);
        }
      }
    }
  }

  public emitChanges() {
    // this.change.emit({
    //   firstVal: this.getMinVal(),
    //   secondVal: this.getMaxVal()
    // });
  }

  private getMaxMinDiff(): number {
    return this.maxValue - this.minValue;
  }

  private getMinVal(): number {
    return this.minValue + this.getMaxMinDiff() * this.firstVal;
  }

  private getMaxVal(): number {
    return this.minValue + this.getMaxMinDiff() * this.secondVal;
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.putBack();
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.putBack();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.mousemoveSecond(event);
  }

  public getWidth() {
    if (this.vertical) {
      return this.size + 'px';
    } else {
      // return '100%';
      return this.length + 'px';
    }
  }

  public getHeight() {
    if (!this.vertical) {
      return this.size + 'px';
    } else {
      // return '100%';
      return this.length + 'px';
    }
  }

}
