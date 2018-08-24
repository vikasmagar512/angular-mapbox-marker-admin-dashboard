import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBoxSideBarComponent } from './map-box-side-bar.component';

describe('MapBoxSideBarComponent', () => {
  let component: MapBoxSideBarComponent;
  let fixture: ComponentFixture<MapBoxSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBoxSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBoxSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
