import { Directive, ElementRef, Renderer2, Input, Output, OnInit, HostListener, EventEmitter, OnChanges, SimpleChanges }
from '@angular/core';

export interface IPosition {
  x: number;
  y: number;
}

class Position implements IPosition {
  constructor(public x: number, public y: number) { }

  static fromEvent(e) {
    return new Position(e.clientX, e.clientY);
  }

  static isIPosition(obj): obj is IPosition {
    return !!obj && ('x' in obj) && ('y' in obj);
  }

  add(p: IPosition) {
    this.x += p.x;
    this.y += p.y;
    return this;
  }

  subtract(p: IPosition) {
    this.x -= p.x;
    this.y -= p.y;
    return this;
  }

  reset() {
    this.x = 0;
    this.y = 0;
    return this;
  }

  set(p: IPosition) {
    this.x = p.x;
    this.y = p.y;
    return this;
  }
}

@Directive({
  selector: '[appTkDraggable]',
  exportAs: 'ngDraggable'
})

export class TkDraggableDirective implements OnInit, OnChanges {
  private allowDrag = true;
  private moving = false;
  private orignal: Position = null;
  private oldTrans = new Position(0, 0);
  private tempTrans = new Position(0, 0);
  private oldZIndex = '';
  private oldPosition = '';
  private _zIndex = '';
  private needTransform = false;
  private useTransform  = false;

  @Output() started = new EventEmitter<any>();
  @Output() stopped = new EventEmitter<any>();
  @Output() edge    = new EventEmitter<any>();

  /** Make the handle HTMLElement draggable */
  @Input() handle: HTMLElement;

  /** Set the bounds HTMLElement */
  @Input() bounds: HTMLElement;

  /** Set z-index when dragging */
  @Input() zIndexMoving: string;

  /** Set z-index when not dragging */
  @Input() set zIndex(setting: string) {
    this.renderer.setStyle(this.el.nativeElement, 'z-index', setting);
    this._zIndex = setting;
  }
  /** Whether to limit the element stay in the bounds */
  @Input() inBounds = false;

  /** Whether the element should use it's previous drag position on a new drag event. */
  @Input() trackPosition = false;

  /** Input css scale transform of element so translations are correct */
  @Input() scale = 1;

  /** Whether to prevent default event */
  @Input() preventDefaultEvent = false;

  /** Set initial position by offsets */
  @Input() position: IPosition = { x: 0, y: 0 };

  /** Emit position offsets when moving */
  @Output() movingOffset = new EventEmitter<IPosition>();

  /** Emit position offsets when put back */
  @Output() endOffset = new EventEmitter<IPosition>();

  @Input()
  set ngDraggable(setting: any) {
    if (setting !== undefined && setting !== null && setting !== '') {
      this.allowDrag = !!setting;

      let element = this.handle ? this.handle : this.el.nativeElement;

      if (this.allowDrag) {
        this.renderer.addClass(element, 'ng-draggable');
      } else {
        this.renderer.removeClass(element, 'ng-draggable');
      }
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.allowDrag) {
      let element = this.handle ? this.handle : this.el.nativeElement;
      this.renderer.addClass(element, 'ng-draggable');
    }

    this.resetPosition();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['position'] && !changes['position'].isFirstChange()) {
      let p = changes['position'].currentValue;

      if (!this.moving) {
        if (Position.isIPosition(p)) {
          this.oldTrans.set(p);
        } else {
          this.oldTrans.reset();
        }

        this.transform();
      } else {
        this.needTransform = true;
      }
    }
  }

  resetPosition() {
    if (Position.isIPosition(this.position)) {
      this.oldTrans.set(this.position);
    } else {
      this.oldTrans.reset();
    }
    this.tempTrans.reset();
    this.transform();
  }

  private moveTo(p: Position) {
    if (this.orignal) {
      p.subtract(this.orignal);
      this.tempTrans.set(p);
      this.transform();

      if (this.bounds) {
        this.edge.emit(this.boundsCheck());
      }

      this.movingOffset.emit({
        x: this.tempTrans.x + this.oldTrans.x,
        y: this.tempTrans.y + this.oldTrans.y
      });
    }
  }

  /**
   * 通过translate 进行移动
   */
  private transform() {
    if ( this.useTransform ) {
      let value = `translate(${this.tempTrans.x + this.oldTrans.x}px, ${this.tempTrans.y + this.oldTrans.y}px)`;

      if (this.scale !== 1) {
        value += ` scale(${this.scale})`;
      }

      this.renderer.setStyle(this.el.nativeElement, 'transform', value);
      this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', value);
      this.renderer.setStyle(this.el.nativeElement, '-ms-transform', value);
      this.renderer.setStyle(this.el.nativeElement, '-moz-transform', value);
      this.renderer.setStyle(this.el.nativeElement, '-o-transform', value);
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'left', this.tempTrans.x + this.oldTrans.x + 'px');
      this.renderer.setStyle(this.el.nativeElement, 'top', this.tempTrans.y + this.oldTrans.y + 'px');
    }

  }

  private toPosition(x: string, y: string): Position {
    return new Position(parseInt(x.substr(0, x.length - 2 ),  10 ) , parseInt(y.substr(0, y.length - 2) , 10 ) );
  }

  private pickUp() {
    // get old z-index:
    this.oldZIndex = this.el.nativeElement.style.zIndex ? this.el.nativeElement.style.zIndex : '';

    if (window) {
       this.oldZIndex = window.getComputedStyle(this.el.nativeElement, null).getPropertyValue('z-index');
    }
    if (this.zIndexMoving) {
      this.renderer.setStyle(this.el.nativeElement, 'z-index', this.zIndexMoving);
    }
    /**
     * 设置为当前的位置
     */
    if (!this.useTransform ) {
      const pos = this.toPosition(
                    window.getComputedStyle(this.el.nativeElement, null).getPropertyValue('left'),
                    window.getComputedStyle(this.el.nativeElement, null).getPropertyValue('top')
                  );
      this.oldTrans.x = pos.x;
      this.oldTrans.y = pos.y;
    }

    if (!this.moving) {
      this.started.emit(this.el.nativeElement);
      this.moving = true;
    }
  }

  private boundsCheck() {
    if (this.bounds) {
      let boundary = this.bounds.getBoundingClientRect();
      let elem = this.el.nativeElement.getBoundingClientRect();
      let result = {
        'top': boundary.top < elem.top,
        'right': boundary.right > elem.right,
        'bottom': boundary.bottom > elem.bottom,
        'left': boundary.left < elem.left
      };

      if (this.inBounds) {
        if (!result.top) {
          this.tempTrans.y -= elem.top - boundary.top;
        }

        if (!result.bottom) {
          this.tempTrans.y -= elem.bottom - boundary.bottom;
        }

        if (!result.right) {
          this.tempTrans.x -= elem.right - boundary.right;
        }

        if (!result.left) {
          this.tempTrans.x -= elem.left - boundary.left;
        }

        this.transform();
      }

      return result;
    }
  }

  private putBack() {
    if (this._zIndex) {
      this.renderer.setStyle(this.el.nativeElement, 'z-index', this._zIndex);
    } else if (this.zIndexMoving) {
      if (this.oldZIndex) {
        this.renderer.setStyle(this.el.nativeElement, 'z-index', this.oldZIndex);
      } else {
        this.el.nativeElement.style.removeProperty('z-index');
      }
    }

    if (this.moving) {
      this.stopped.emit(this.el.nativeElement);
      if (this.needTransform) {
        if (Position.isIPosition(this.position)) {
          this.oldTrans.set(this.position);
        } else {
          this.oldTrans.reset();
        }

        this.transform();
        this.needTransform = false;
      }

      if (this.bounds) {
        this.edge.emit(this.boundsCheck());
      }

      this.moving = false;
      this.endOffset.emit({
        x: this.tempTrans.x + this.oldTrans.x,
        y: this.tempTrans.y + this.oldTrans.y
      });

      if (this.trackPosition) {
        this.oldTrans.add(this.tempTrans);
      }

      this.tempTrans.reset();

      if (!this.trackPosition) {
        this.transform();
      }
    }
  }

  // Support Mouse Events:
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: any) {
    // 1. skip right click;
    // 2. if handle is set, the element can only be moved by handle
    // 如果使用了hand模式，需要检查事件的触发源是否为 hand，hand 是当前宿主元素的子元素
    if (event.button === 2 || (this.handle !== undefined && !this.checkHandleTarget(event.target, this.handle))) {
      return;
    }

    if (this.preventDefaultEvent) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.orignal = Position.fromEvent(event);
    this.pickUp();
  }

  checkHandleTarget(target: Element, element: Element) {
    // Checks if the target is the element clicked, then checks each child element of element as well
    // Ignores button clicks
    // Ignore elements of type button
    if (element.tagName === 'BUTTON') {
      return false;
    }

    // If the target was found, return true (handle was found)
    if (element === target) {
      return true;
    }

    // Recursively iterate this elements children
    for (let child in element.children) {
      if (element.children.hasOwnProperty(child)) {
        if (this.checkHandleTarget(target, element.children[child])) {
          return true;
        }
      }
    }

    // Handle was not found in this lineage
    // Note: return false is ignore unless it is the parent element
    return false;
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
    if (this.moving && this.allowDrag) {
      if (this.preventDefaultEvent) {
        event.stopPropagation();
        event.preventDefault();
      }

      this.moveTo(Position.fromEvent(event));
    }
  }

  // Support Touch Events:
  @HostListener('document:touchend')
  onTouchEnd() {
    this.putBack();
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: any) {
    if (this.handle !== undefined && !this.checkHandleTarget(event.target, this.handle)) {
      return;
    }

    if (this.preventDefaultEvent) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.orignal = Position.fromEvent(event.changedTouches[0]);
    this.pickUp();
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: any) {
    if (this.moving && this.allowDrag) {
      if (this.preventDefaultEvent) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.moveTo(Position.fromEvent(event.changedTouches[0]));
    }
  }
}
