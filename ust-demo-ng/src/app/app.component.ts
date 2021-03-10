import { Component, OnInit } from '@angular/core';
import { ApiProxyService} from './api-proxy.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ust-demo-ng';

  constructor(private apiProxyService: ApiProxyService) { }

  ngOnInit() {
    this.apiProxyService.getAllReminders().subscribe((data: any[])=>{
      console.log(data);
    })  
  }
}
