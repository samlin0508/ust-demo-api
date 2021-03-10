import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReminderContainerComponent } from './add-reminder-container.component';

describe('AddReminderContainerComponent', () => {
  let component: AddReminderContainerComponent;
  let fixture: ComponentFixture<AddReminderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReminderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReminderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
