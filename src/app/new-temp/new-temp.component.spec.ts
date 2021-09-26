import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTempComponent } from './new-temp.component';

describe('NewTempComponent', () => {
  let component: NewTempComponent;
  let fixture: ComponentFixture<NewTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
