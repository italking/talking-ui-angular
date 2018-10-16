import { Routes } from '@angular/router';
import {TkAlertInfoComponent} from './info/tk-alert-info/tk.alert.info.component';
import {TkWindowInfoComponent} from './info/tk-window-info/tk-window-info.component';
import {TkTabInfoComponent} from './info/tk-tab-info/tk-tab-info.component';
import {TkMultiselectInfoComponent} from './info/tk-multiselect-info/tk-multiselect-info.component';
import {TkSliderComponent} from '../tkui/slider/tk-slider.component';
import {TkSliderInfoComponent} from './info/tk-slider-info/tk-slider-info.component';
import {TkDownloadInfoComponent} from './info/tk-download-info/tk-download-info.component';
import {TkChartInfoComponent} from './info/tk-chart-info/tk-chart-info.component';
import {AboutComponent} from './about/about.component';
import {ProductComponent} from './product/product.component';
import {ProductWindowComponent} from './product/window/product-window/product-window.component';
import {ProductRightMenuComponent} from './product/right-menu/product-right-menu/product-right-menu.component';
import {ProductCoverComponent} from './product/cover/product-cover/product-cover.component';
import {ProductAlertComponent} from './product/alert/product-alert/product-alert.component';
import {ProductConfirmComponent} from './product/confirm/product-confirm/product-confirm.component';
import {HomeComponent} from './home/home.component';
import {ProductAnchorComponent} from './product/anchor/product-anchor/product-anchor.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [{
        path: '',
        component: ProductWindowComponent
      },
      {
        path: 'window',
        component: ProductWindowComponent
      },
      {
        path: 'rightMenu',
        component: ProductRightMenuComponent
      },
      {
        path: 'cover',
        component: ProductCoverComponent
      },
      {
        path: 'alert',
        component: ProductAlertComponent
      },
      {
        path: 'confirm',
        component: ProductConfirmComponent
      },
      {
        path: 'anchor',
        component: ProductAnchorComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
];
