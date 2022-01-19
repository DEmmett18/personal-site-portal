import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLogoComponent } from './dlogo.component';

describe('DLogoComponent', () => {
  let component: DLogoComponent;
  let fixture: ComponentFixture<DLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
