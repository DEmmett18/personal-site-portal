import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceSegmentComponent } from './work-experience-segment.component';

describe('WorkExperienceSegmentComponent', () => {
  let component: WorkExperienceSegmentComponent;
  let fixture: ComponentFixture<WorkExperienceSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
