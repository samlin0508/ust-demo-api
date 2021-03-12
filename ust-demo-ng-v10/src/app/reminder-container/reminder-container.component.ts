import { Component, Input, OnInit } from '@angular/core';
import { Reminder } from '../reminder';
import { ApiProxyService } from '../api-proxy.service';
import { ReminderViewerComponent } from '../reminder-viewer/reminder-viewer.component';

@Component({
  selector: 'reminder-container',
  templateUrl: './reminder-container.component.html',
  styleUrls: ['./reminder-container.component.css']
})
export class ReminderContainerComponent implements OnInit {
  @Input() reminder: Reminder;
  @Input() parent: ReminderViewerComponent;
  viewMode: boolean = true;

  constructor(private apiProxyService: ApiProxyService) { }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    this.apiProxyService.deleteReminder(this.reminder.id).subscribe(() => {
      this.parent.getAllReminders();
    });
  }

  onEditClick(): void {
    this.viewMode = false;
  }

  onSaveClick(): void {
    this.apiProxyService.putReminder(this.reminder).subscribe(() => {
      this.viewMode = true;
      this.parent.getAllReminders();
    });
  }

  onCancelClick(): void {
    this.viewMode = true;
  }
}
