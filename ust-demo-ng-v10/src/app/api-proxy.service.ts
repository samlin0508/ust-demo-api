import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reminder } from './reminder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProxyService {

  constructor(private httpClient: HttpClient) { }

  public getAllReminders(): Observable<Reminder[]>{
    return this.httpClient.get<Reminder[]>("https://localhost:5001/api/reminder");
  }

  public postReminder(reminder: Reminder){
    return this.httpClient.post<Reminder>("https://localhost:5001/api/reminder", reminder);
  }
}
