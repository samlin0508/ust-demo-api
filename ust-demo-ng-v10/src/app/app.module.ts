import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReminderViewerComponent } from './reminder-viewer/reminder-viewer.component';
import { ReminderContainerComponent } from './reminder-container/reminder-container.component';
import { AddReminderContainerComponent } from './add-reminder-container/add-reminder-container.component';

import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderViewerComponent,
    ReminderContainerComponent,
    AddReminderContainerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
