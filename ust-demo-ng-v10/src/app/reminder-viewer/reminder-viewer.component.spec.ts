import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderViewerComponent } from './reminder-viewer.component';

describe('ReminderViewerComponent', () => {
  let component: ReminderViewerComponent;
  let fixture: ComponentFixture<ReminderViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
