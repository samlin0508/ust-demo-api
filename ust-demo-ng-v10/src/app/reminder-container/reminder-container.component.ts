import { Component, Input, OnInit } from '@angular/core';
import { Reminder } from '../reminder';
import { ApiProxyService } from '../api-proxy.service';

@Component({
  selector: 'reminder-container',
  templateUrl: './reminder-container.component.html',
  styleUrls: ['./reminder-container.component.css']
})
export class ReminderContainerComponent implements OnInit {
  @Input() reminder: Reminder;
  viewMode: boolean = true;

  constructor(private apiProxyService: ApiProxyService) { }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    this.apiProxyService.deleteReminder(this.reminder.id).subscribe(() => {
      window.location.href = "reminder-viewer";
    });
  }

  onEditClick(): void {
    this.viewMode = false;
  }

  onSaveClick(): void {
    this.apiProxyService.putReminder(this.reminder).subscribe(() => {
      this.viewMode = true;
      window.location.href = "reminder-viewer";
    });
  }
}
