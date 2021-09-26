import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePurchaseComponent } from './time-purchase.component';

describe('TimePurchaseComponent', () => {
  let component: TimePurchaseComponent;
  let fixture: ComponentFixture<TimePurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
