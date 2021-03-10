import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReminderContainerComponent } from './add-reminder-container/add-reminder-container.component';
import { ReminderViewerComponent } from './reminder-viewer/reminder-viewer.component';

const routes: Routes = [{
  path: '', component: ReminderViewerComponent
},{
  path: 'reminder-viewer', component: ReminderViewerComponent
},{
  path: 'add-reminder', component: AddReminderContainerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
