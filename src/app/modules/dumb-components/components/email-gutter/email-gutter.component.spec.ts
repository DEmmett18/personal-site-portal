import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailGutterComponent } from './email-gutter.component';

describe('EmailGutterComponent', () => {
  let component: EmailGutterComponent;
  let fixture: ComponentFixture<EmailGutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailGutterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailGutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
