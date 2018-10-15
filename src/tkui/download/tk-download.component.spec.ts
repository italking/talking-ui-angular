import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkDownloadComponent } from './tk-download.component';

describe('TkDownloadComponent', () => {
  let component: TkDownloadComponent;
  let fixture: ComponentFixture<TkDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
