import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlrComponent } from './titlr.component';

describe('TitlrComponent', () => {
  let component: TitlrComponent;
  let fixture: ComponentFixture<TitlrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
