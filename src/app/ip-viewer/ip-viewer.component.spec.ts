import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpViewerComponent } from './ip-viewer.component';

describe('IpViewerComponent', () => {
  let component: IpViewerComponent;
  let fixture: ComponentFixture<IpViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
