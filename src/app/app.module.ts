import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHomeComponent } from './app.home.component';
import {CommonModule} from '@angular/common';
import { routes } from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {TkWindow1Component} from './info/tk-window-info/tk-window1/tk-window1.component';
import {TkWindow2Component} from './info/tk-window-info/tk-window2/tk-window2.component';
import {TkWindow3Component} from './info/tk-window-info/tk-window3/tk-window3.component';

import {TkuiModule} from '../tkui/tkui.module';
import { TkWindowInfoComponent } from './info/tk-window-info/tk-window-info.component';
import { TkTabInfoComponent } from './info/tk-tab-info/tk-tab-info.component';
import { TkMultiselectInfoComponent } from './info/tk-multiselect-info/tk-multiselect-info.component';
import { TkSliderInfoComponent } from './info/tk-slider-info/tk-slider-info.component';
import { TkDownloadInfoComponent } from './info/tk-download-info/tk-download-info.component';
import { TkWindow4Component } from './info/tk-window-info/tk-window4/tk-window4.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductWindowComponent } from './product/window/product-window/product-window.component';
import { ProductRightMenuComponent } from './product/right-menu/product-right-menu/product-right-menu.component';
import { ProductAlertComponent } from './product/alert/product-alert/product-alert.component';
import { ProductCoverComponent } from './product/cover/product-cover/product-cover.component';
import { ProductConfirmComponent } from './product/confirm/product-confirm/product-confirm.component';
import { HomeComponent } from './home/home.component';
import { DemolWindowComponent } from './product/window/product-window/demol-window/demol-window.component';
import { ProductAnchorComponent } from './product/anchor/product-anchor/product-anchor.component';
import { ProductHighlightComponent } from './product/highlight/product-highlight/product-highlight.component';
import { SimpleRightMenuComponent } from './product/right-menu/product-right-menu/simple-right-menu/simple-right-menu.component';
import { ProductBaseTableComponent } from './product/base-table/product-base-table.component';
import { ProductBaseTabComponent } from './product/base-tab/product-base-tab/product-base-tab.component';
import { ProductChartComponent } from './product/chart/product-chart/product-chart.component';
import { ProductSliderComponent } from './product/slider/product-slider/product-slider.component';

@NgModule({
  declarations: [
    AppHomeComponent,
    TkWindowInfoComponent,
    TkWindow2Component,
    TkWindow1Component,
    TkWindow3Component,
    TkWindowInfoComponent,
    TkTabInfoComponent,
    TkMultiselectInfoComponent,
    TkSliderInfoComponent,
    TkDownloadInfoComponent,
    TkWindow4Component,
    AboutComponent,
    ProductComponent,
    ProductWindowComponent,
    ProductRightMenuComponent,
    ProductAlertComponent,
    ProductCoverComponent,
    ProductConfirmComponent,
    HomeComponent,
    DemolWindowComponent,
    ProductAnchorComponent,
    ProductHighlightComponent,
    SimpleRightMenuComponent,
    ProductBaseTableComponent,
    ProductBaseTabComponent,
    ProductChartComponent,
    ProductSliderComponent,
  ],
  entryComponents: [
      DemolWindowComponent,
      SimpleRightMenuComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CommonModule,
    TkuiModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppHomeComponent
  ],
  exports: [
  ]
})
export class AppModule { }
