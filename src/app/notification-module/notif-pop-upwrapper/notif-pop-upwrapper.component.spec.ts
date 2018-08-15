import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifPopUpwrapperComponent } from './notif-pop-upwrapper.component';

describe('NotifPopUpwrapperComponent', () => {
  let component: NotifPopUpwrapperComponent;
  let fixture: ComponentFixture<NotifPopUpwrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifPopUpwrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifPopUpwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
