import {
  Component, Input, OnInit, Output, ViewChild,
  ComponentFactoryResolver, OnDestroy, EventEmitter, AfterViewInit, HostListener
} from '@angular/core';
import {TkWindowContentDirective} from './tk-window-content.directive';
import {TkWindow} from './tk-window';
import {TkCoverService} from '../cover/tk-cover.service';

@Component({
  selector: 'app-tk-window',
  templateUrl: './tk-window.component.html',
  styleUrls: ['./tk-window.component.css']
})
export class TkWindowComponent implements OnInit, OnDestroy , AfterViewInit {

  @Input() window: TkWindow ;
  @Output() removeWindow  = new EventEmitter();
  @Output() minWindow     = new EventEmitter();
  @Output() activeWindow  = new EventEmitter();
  @ViewChild(TkWindowContentDirective) content: TkWindowContentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver , private tkCoverService: TkCoverService ) {

  }

  private toolBarHeight = 46;
  private footerHeight  = 30;
  /**
   * 0 正常 1 最大化 2 最小化
   * @type {number}
   */

  private oldLeft;
  private oldTop;
  private oldHeight;
  private oldWithd;
  private componentRef;
  @HostListener('document:click', ['$event'])
  public onDocumentClick(btn: Event) {
    if (this.window && this.window.onDocumentClick) {
        this.window.onDocumentClick.call(null , btn);
    }
  }
  @HostListener('click', ['$event'])
  public onClick(btn: Event) {
    if (this.window && this.window.onClick) {
        this.window.onClick.call(null , btn);
    }
  }
  ngOnInit() {
    // this.loadComponent();
  }
  ngOnDestroy() {
  }
  ngAfterViewInit() {
    this.loadComponent();
  }
  public getWidth() {
    if (this.window.width < 0) {
        return 'auto';
    }
    return this.window.width + 'px';
  }
  public getHeight() {
    if (this.window.height < 0) {
      return 'auto';
    }
    return this.window.height + 'px';
  }

  public getLeft() {
    return this.window.left + 'px';
  }
  public getTop() {
    return this.window.top + 'px';
  }

  public getContentWidth() {
    if (this.window.width < 0) {
        return 'auto';
    }
    return this.window.width - 6 + 'px';
  }
  public getContentHeight() {
      if (this.window.height < 0) {
        return 'auto';
      }
      if (this.isShowFooter()) {
        return  this.window.height - (this.window.showHeader ? this.toolBarHeight : 0) - this.footerHeight + 'px';
      } else {
        return  this.window.height -  (this.window.showHeader ? this.toolBarHeight : 0) + 'px';
      }

  }
  public getContentVisibility() {
      return this.window._contentVisibility;
  }

  public getZindex() {
    return  this.window.zindex;
  }


  public max() {
     if ( this.window._state === 0 ) {

       this.oldLeft      = this.window.left;
       this.oldTop       = this.window.top;
       this.oldHeight    = this.window.height;
       this.oldWithd     = this.window.width;

       this.window.left = 0;
       this.window.top  = 0;
       this.window.height = window.innerHeight;
       this.window.width  = window.innerWidth;
       this.window._state = 1;
     } else if (this.window._state === 1 ) {
       this.window.left   = this.oldLeft;
       this.window.top    = this.oldTop;
       this.window.height = this.oldHeight;
       this.window.width  = this.oldWithd;
       this.window._state = 0;
     }

  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.window.contentComponent);

    const viewContainerRef = this.content.viewContainerRef;
           viewContainerRef.clear();
     this.componentRef = viewContainerRef.createComponent(componentFactory);
     if (this.componentRef.instance.configData && this.window.data != null) {
          this.componentRef.instance.configData(this.window.data);
     }

     if (this.window.popinfo) {
         this._copyPopoinfo(this.window.popinfo, this.componentRef.instance );
     }
     if (this.window.reInit &&  this.componentRef.instance.ngOnInit) {
        setTimeout(() => {
          this.componentRef.instance.ngOnInit();
        } , 1);
     }
    /**
     * 传入隐藏的函数，用于关闭window,
     * 不建议使用  默认save cancel 都会直接关闭window
     */
    this.componentRef.instance['removeWindow'] = () => {
       this.remove();
    };
    this.componentRef.instance['saveWindow'] = () => {
      this.save();
    };
    this.componentRef.instance['cancelWindow'] = () => {
      this.cancel();
    };
    // 设置关联的组件，销毁的时候必须删除掉，防止内存溢出
    this.window['_loadedComponent_'] = this.componentRef.instance;
  }

  public remove() {
    if (this.window.model) {
        this.tkCoverService.hide(this.window._cover);
    }
    this.removeWindow.emit();
  }
  public min() {
    if (this.window.model) {
        this.tkCoverService.hide(this.window._cover);
    }
    this.window._oldState = this.window._state;
    this.window._state = 2;
    this.minWindow.emit();
  }

  public draggEnd(p) {
    this.window.left = p.x;
    this.window.top  = p.y;
    this.window._contentVisibility = 'visible';
  }

  public draggStart() {
    this.window._contentVisibility = 'hidden';
  }

  public active(event) {
    event.stopPropagation();
    this.activeWindow.emit(this.window);
  }

  public isShowFooter() {
    return this.window.save || this.window.cancel;
  }

  /**
   * 点击关闭的按钮
   */
  public closeWindow() {
    /**
     * 关闭也是取消的一种方式
     */
    this.cancel();
    this.remove(); // ???
  }

  /**
   * 保存的时候 定义返回值
   * 返回true的时候 或者没有返回值的时候删除
   */
  public save() {
    if (this.window.popinfo) {
        this._fetchPopinfo(this.window.popinfo, this.componentRef.instance );
    }

    let re = null;
    if (this.window.save && this.componentRef.instance && this.componentRef.instance['windowSave']) {
        re =  this.componentRef.instance['windowSave'](this.window.popinfo, this.window.onSave);
    }

    if (this.window.onSave && this.window.autoCallOnsave) {
        re =  this.window.onSave(this.window.popinfo);
    }


    /**
     * 保存后直接关闭window
     */
    if (false === re) {
      return ;
    }
    this.remove();
  }

  public cancel() {
    /**
     * 只有在设置回调函数，需要参数的时候才 设置 popinfo
     */
    if (this.window.popinfo && this.window.onCancel ) {
        this._fetchPopinfo(this.window.popinfo, this.componentRef.instance );
    }

    if (this.window.cancel &&  this.componentRef.instance && this.componentRef.instance['windowCancel']) {
        this.componentRef.instance['windowCancel']();
    }

    let re = null;
    if (this.window.onCancel) {
      re =  this.window.onCancel(this.window.popinfo);
    }
    /**
     * 取消后直接关闭window
     */
    this.remove();
  }

  /**
   * 复制popin中的属性到组件中
   * @private
   */
  private _copyPopoinfo(popinfo , comp ) {
      Object.keys(popinfo).forEach(name => {
        comp[name] = popinfo[name];
      });
  }

  /**
   * 从组件中复制属性到 popinfo
   * @param popinfo
   * @param comp
   * @private
   */
  private _fetchPopinfo(popinfo , comp ) {
    Object.keys(popinfo).forEach(name => {
        popinfo[name] = comp[name];
    });
  }

  public onResizeEnd(event) {
   // this.window = Object.assign({} , this.window);
    this.window.height = event.height;
    this.window.width = event.width;
    this.window.left = event.left;
    this.window.top = event.top;
  }
}
