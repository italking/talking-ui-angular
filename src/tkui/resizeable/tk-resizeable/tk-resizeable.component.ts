import {Component, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Output, Renderer2} from '@angular/core';

@Component({
  selector: '[appTkResizeable]',
  templateUrl: './tk-resizeable.component.html',
  styleUrls: ['./tk-resizeable.component.css']
})
export class TkResizeableComponent implements OnInit {

  @Output()
  public resizeEnd: EventEmitter<any> = new EventEmitter<any>();
  private offset: {
      width:  number,
      height: number,
      left: number,
      top: number
  }
  /**
   * 最终的结果值
   */
  private endOffset: {
      width:  number,
      height: number,
      left: number,
      top: number
  }
  /**
   * 移动的类型
   */
  private  type;
  @HostBinding('style.-webkit-user-select')
  @HostBinding('style.-moz-user-select')
  @HostBinding('style.-ms-user-select')
  @HostBinding('style.user-select')
  private get select() {
    if (this.isDown) {
      return 'none';
    } else {
      return null;
    }
  }
  private isDown;
  private helper;
  private disX; // 记录鼠标点击事件的位置 X
  private disY; // 记录鼠标点击事件的位置 Y
  public N = 'n';
  public S = 's';
  public W = 'w';
  public E = 'e';
  public NW = 'nw';
  public SW = 'sw';
  public NE = 'ne';
  public SE = 'se';

  constructor(
    private remder: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  }

  /**
   *  计算窗口的大小
   */
  private resize(dx: number , dy: number , type) {
    let height = this.endOffset.height ;
    let width  = this.endOffset.width;
    let top    = this.endOffset.top;
    let left   = this.endOffset.left;
    /**
     * 上方移动
     */
    if (type === this.N) {
        height = this.offset.height - dy;
        top     = this.offset.top + dy;
        // 左方移动
    } else if (type === this.W) {
        width = this.offset.width - dx;
        left  = this.offset.left + dx;
         // 下方移动
    } else if (type === this.S) {
        height = this.offset.height + dy;
      // 右方移动
    } else if (type === this.E) {
        width = this.offset.width + dx;
      // 左上方移动
    } else if (type === this.NW) {
      height = this.offset.height - dy;
      top     = this.offset.top + dy;
      width = this.offset.width - dx;
      left  = this.offset.left + dx;
      // 左下方
    } else if ( type === this.SW)  {
      width = this.offset.width - dx;
      left  = this.offset.left + dx;
      height = this.offset.height + dy;
      // 右上方
    } else if (type === this.NE) {
      height = this.offset.height - dy;
      top     = this.offset.top + dy;
      width = this.offset.width + dx;
    } else if (type === this.SE) {
      width = this.offset.width + dx;
      height = this.offset.height + dy;
    }
    if (width > 10 && height > 10) {
      this.endOffset.width = width;
      this.endOffset.height = height;
      this.endOffset.left = left;
      this.endOffset.top = top;
    }
  }
  private resetHelper() {
    this.remder.setStyle(this.helper , 'left' ,   this.endOffset.left      + 'px');
    this.remder.setStyle(this.helper , 'top' ,    this.endOffset.top       + 'px');
    this.remder.setStyle(this.helper , 'width' ,  this.endOffset.width    + 'px');
    this.remder.setStyle(this.helper , 'height' , this.endOffset.height   + 'px');
  }
  public onMousedown(event , type) {
        this.isDown = true;
        this.type = type;
        this.disX = event.clientX;
        this.disY = event.clientY;
        this.offset = {
           width  :  parseInt(this.elementRef.nativeElement.offsetWidth , 10),
           height :  parseInt(this.elementRef.nativeElement.offsetHeight , 10),
           top    :  parseInt(this.elementRef.nativeElement.offsetTop , 10),
           left   :  parseInt(this.elementRef.nativeElement.offsetLeft , 10),
        };
        this.endOffset = Object.assign({} , this.offset );
        this.createHelper();
        this.remder.addClass(this.elementRef.nativeElement , '');
  }

  // 监听document移动事件事件
  @HostListener('document:mousemove', ['$event']) onMousemove(event) {
    // 判断该元素是否被点击了。
    if (this.isDown) {
        this.resize(event.clientX - this.disX , event.clientY - this.disY , this.type);
        this.resetHelper();
    }
  }

  // 监听document离开事件
  @HostListener('document:mouseup', ['$event']) onMouseup(event) {
    if (this.isDown) {
        this.removeHelper();
        this.isDown = false;
        this.resizeEnd.emit({
          disTop: this.endOffset.top - this.offset.top ,
          disLeft: this.endOffset.left - this.offset.left ,
          disHeight: this.endOffset.height - this.offset.height ,
          disWith: this.endOffset.width - this.offset.width ,
          top: this.endOffset.top ,
          left: this.endOffset.left,
          height: this.endOffset.height,
          width: this.endOffset.width
        });
    }
  }
  private removeHelper() {
    this.helper.parentNode.removeChild(this.helper);
    this.helper = null;
  }
  private createHelper() {
    const helper = this.remder.createElement('div');
    this.remder.addClass(helper, 'tk-window-resizable-helper');
    this.helper = helper;
    const style = window.getComputedStyle(this.elementRef.nativeElement);
    let zIndex: any = style.getPropertyValue('z-index');
    if (zIndex === 'auto') {
        zIndex = 90;
    } else {
       zIndex = parseInt(zIndex , 10) + 1;
    }
    this.remder.setStyle(this.helper , 'zIndex' , zIndex);
    if (style.getPropertyValue('position') === 'fixed') {
      this.remder.setStyle(this.helper , 'position' , 'fixed');
    } else {
      this.remder.setStyle(this.helper , 'position' , 'absolute');
    }

    this.resetHelper();

    this.insertAfter(this.helper , this.elementRef.nativeElement);
  }
  private insertAfter(newEl, targetEl) {
    const parentEl = targetEl.parentNode;
    if (parentEl.lastChild === targetEl) {
      parentEl.appendChild(newEl);
    } else {
      parentEl.insertBefore(newEl , targetEl.nextSibling);
    }
  }


}
