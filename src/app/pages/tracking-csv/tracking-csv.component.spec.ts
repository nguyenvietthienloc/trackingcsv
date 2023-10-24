import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingCsvComponent } from './tracking-csv.component';

describe('TrackingCsvComponent', () => {
  let component: TrackingCsvComponent;
  let fixture: ComponentFixture<TrackingCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
