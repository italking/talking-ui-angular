import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkDownloadInfoComponent } from './tk-download-info.component';

describe('TkDownloadInfoComponent', () => {
  let component: TkDownloadInfoComponent;
  let fixture: ComponentFixture<TkDownloadInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkDownloadInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkDownloadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
