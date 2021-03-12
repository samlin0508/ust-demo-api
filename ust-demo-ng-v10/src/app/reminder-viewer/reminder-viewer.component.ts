import { Component, OnInit } from '@angular/core';
import { ApiProxyService } from '../api-proxy.service'
import { Reminder } from '../reminder';

@Component({
  selector: 'reminder-viewer',
  templateUrl: './reminder-viewer.component.html',
  styleUrls: ['./reminder-viewer.component.css']
})
export class ReminderViewerComponent implements OnInit {
  reminders: Reminder[] = null;
  constructor(private apiProxyService: ApiProxyService) { }

  ngOnInit() {
    this.getAllReminders();
  }

  public getAllReminders() {
    this.apiProxyService.getAllReminders().subscribe((data: any[])=>{
      this.reminders = data;
    }) 
  }
}
