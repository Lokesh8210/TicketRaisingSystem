import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTicketStatusComponent } from './track-ticket-status.component';

describe('TrackTicketStatusComponent', () => {
  let component: TrackTicketStatusComponent;
  let fixture: ComponentFixture<TrackTicketStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackTicketStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackTicketStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
