import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GutterSectionComponent } from './gutter-section.component';

describe('GutterSectionComponent', () => {
  let component: GutterSectionComponent;
  let fixture: ComponentFixture<GutterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GutterSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GutterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
