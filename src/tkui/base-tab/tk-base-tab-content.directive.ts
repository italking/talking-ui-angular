import {
  AfterViewInit,
  Directive,  Input, Renderer2, TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[tkBaseTabContent]'
})
export class TkBaseTabContentDirective implements AfterViewInit {
  public  active = false;
  private loaded = false;
  public contentName;
  private dom;
  @Input('tkBaseTabContent')
  public set name(name: string) {
    this.contentName = name;
  }
  constructor(
    private render: Renderer2 ,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
     // this.viewContainer.clear();
  }
  public ngAfterViewInit() {
  //  this.load();
  }
  public show(activeClass: string) {
    if (this.active) {
      return ;
    }
    this.active = true;
    if (!this.loaded) {
      this.load();
    }
    if (activeClass && this.dom) {
        this.render.addClass(this.dom , activeClass);
    }
    if (this.dom) {
      this.render.setStyle(this.dom , 'display' , 'block');
    }

  }

  public hide(activeClass: string)  {
    if (!this.active) {
      return;
    }
    this.active = false;
    if (activeClass && this.dom) {
        this.render.removeClass(this.dom , activeClass);
    }
    if (this.dom) {
      this.render.setStyle(this.dom , 'display' , 'none');
    }

  }

  private load() {
    this.viewContainer.clear();
    const ref = this.viewContainer.createEmbeddedView(this.templateRef , {$implicit: {} });
    this.dom = ref.rootNodes[0];
    this.render.setStyle(this.dom , 'display' , 'none');
    this.loaded = true;
  }
}
