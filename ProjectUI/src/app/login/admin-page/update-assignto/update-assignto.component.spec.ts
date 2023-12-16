import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssigntoComponent } from './update-assignto.component';

describe('UpdateAssigntoComponent', () => {
  let component: UpdateAssigntoComponent;
  let fixture: ComponentFixture<UpdateAssigntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAssigntoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAssigntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
