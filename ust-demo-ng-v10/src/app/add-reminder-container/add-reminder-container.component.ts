import { Component, OnInit } from '@angular/core';
import { ApiProxyService } from '../api-proxy.service';
import { Reminder } from '../reminder';

@Component({
  selector: 'add-reminder-container',
  templateUrl: './add-reminder-container.component.html',
  styleUrls: ['./add-reminder-container.component.css']
})
export class AddReminderContainerComponent implements OnInit {
  reminder: Reminder = {
    id: 0,
    summary: null,
    description: null
  };

  constructor(private apiProxyService: ApiProxyService) { }

  ngOnInit(): void {
  }

  onAddClick(): void {
    this.apiProxyService.postReminder(this.reminder).subscribe(() => {
      window.location.href = "reminder-viewer";
    });
  }
}
