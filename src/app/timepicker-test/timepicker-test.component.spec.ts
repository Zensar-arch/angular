import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerTestComponent } from './timepicker-test.component';

describe('TimepickerTestComponent', () => {
  let component: TimepickerTestComponent;
  let fixture: ComponentFixture<TimepickerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimepickerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
