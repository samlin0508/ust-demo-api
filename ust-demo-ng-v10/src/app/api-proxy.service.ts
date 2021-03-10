import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiProxyService {

  constructor(private httpClient: HttpClient) { }

  public getAllReminders(){
    return this.httpClient.get("https://localhost:5001/api/reminder");
  }
}
