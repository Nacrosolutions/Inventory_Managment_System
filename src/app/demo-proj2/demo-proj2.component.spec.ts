import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProj2Component } from './demo-proj2.component';

describe('DemoProj2Component', () => {
  let component: DemoProj2Component;
  let fixture: ComponentFixture<DemoProj2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoProj2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
