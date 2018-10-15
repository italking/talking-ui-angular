import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Alert} from './tk.alert';
import {AlertType} from './tk.alert-type';

/**
 * 一个Alert的组件
 */
@Component({
  selector: 'app-tk-alert',
  template: `
    <div class="alert"
        [class.alert-success]="isSuccess()"
        [class.alert-info]="isInfo()"
        [class.alert-warning]="isWarning()"
        [class.alert-danger]="isDanger()">
      <button *ngIf="isDismissEnabled()" type="button" class="close" data-dismiss="alert" aria-label="Close" (click)="dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
      <strong *ngIf="isTextStrongDefined()">{{alert.textStrong}}</strong><span *ngIf="!htmlTextEnabled">{{alert.text}}</span>
      <span *ngIf="htmlTextEnabled" [innerHtml]="alert.text"></span>
    </div>
  `})
export class TkAlertComponent implements OnInit {

  @Input() alert = new Alert(AlertType.INFO, '', '');

  @Input() htmlTextEnabled = false;
  /**
   * 自定义的退出的事件
   * @type {EventEmitter<any>}
   */
  @Output() dismissed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.initTimerIfNeeded();
  }

  isSuccess() {
    return this.alert.alertType === AlertType.SUCCESS;
  }

  isInfo() {
    return this.alert.alertType === AlertType.INFO;
  }

  isWarning() {
    return this.alert.alertType === AlertType.WARNING;
  }

  isDanger() {
    return this.alert.alertType === AlertType.DANGER;
  }

  /**
   * 当超时的时候触发自定义事件进行退出
   */
  dismiss() {
    this.dismissed.emit();
  }

  isDismissEnabled() {
    return this.alert.isDismissable();
  }

  isTextStrongDefined() {
    return this.alert.textStrong && this.alert.textStrong.length > 0;
  }

  private initTimerIfNeeded() {
    if (this.alert.isAutoDismissing()) {
      setTimeout(() => this.dismiss(), this.alert.autoDismissTime);
    }
  }
}
