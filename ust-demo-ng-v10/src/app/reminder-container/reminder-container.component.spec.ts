import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderContainerComponent } from './reminder-container.component';

describe('ReminderContainerComponent', () => {
  let component: ReminderContainerComponent;
  let fixture: ComponentFixture<ReminderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
