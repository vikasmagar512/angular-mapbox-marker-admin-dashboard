import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBottomComponent } from './customer-bottom.component';

describe('CustomerBottomComponent', () => {
  let component: CustomerBottomComponent;
  let fixture: ComponentFixture<CustomerBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
