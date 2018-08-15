import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitySettingComponent } from './capacity-setting.component';

describe('CapacitySettingComponent', () => {
  let component: CapacitySettingComponent;
  let fixture: ComponentFixture<CapacitySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
