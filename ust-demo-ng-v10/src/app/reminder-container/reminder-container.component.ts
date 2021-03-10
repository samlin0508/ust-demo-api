import { Component, Input, OnInit } from '@angular/core';
import { Reminder } from '../reminder';

@Component({
  selector: 'reminder-container',
  templateUrl: './reminder-container.component.html',
  styleUrls: ['./reminder-container.component.css']
})
export class ReminderContainerComponent implements OnInit {
  @Input() reminder: Reminder;

  constructor() { }

  ngOnInit(): void {
  }

}
