import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProjComponent } from './demo-proj.component';

describe('DemoProjComponent', () => {
  let component: DemoProjComponent;
  let fixture: ComponentFixture<DemoProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
