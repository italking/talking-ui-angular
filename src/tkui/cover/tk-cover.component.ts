import {Component, OnInit, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';
import {TkCoverService} from './tk-cover.service';

@Component({
  selector: 'app-tk-cover',
  templateUrl: './tk-cover.component.html',
  styleUrls: ['./tk-cover.component.css']
})
export class TkCoverComponent implements OnInit {

  public zindex = 0;
  public visible = false;
  public width ;
  public height;
  public loading = false;
  @HostBinding('style.z-index') hzindex = 'auto';
  constructor(
                private tkCoverService: TkCoverService ,
                private element: ElementRef,
                private renderer: Renderer2
              ) {
  }

  ngOnInit() {
    this.tkCoverService.showCover.subscribe((cover: any) => {
      this.show(cover.zindex , cover.loading);
    });
    this.tkCoverService.hideCover.subscribe(() => {
      this.hidde();
    });
  }

  public show(zindex: number , loading: boolean ) {

    this.zindex = zindex;
    this.visible = true;
    this.loading = loading;
    this._reset();
  }

  private _reset() {
    this.width =  window.innerWidth;
    this.height = window.innerHeight;
  }


  public hidde() {
    this.visible = false;
  }

  public getDisplay() {
    if (this.visible) {
      return 'block';
    } else {
      return 'none';
    }
  }

  public getWidth() {
    return this.width + 'px';
  }

  public getHeight() {
    return this.height + 'px';
  }

  public getLoadingLeft() {
    return this.width / 2 - 125 + 'px';
  }

  public getLoadingTop() {
    return this.height / 2 - 125 + 'px';
  }


  @HostListener('window:resize', [])
  onResize() {
    this._reset();
  }
}
