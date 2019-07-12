import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewUsersComponent } from './new-users/new-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'NewProject', pathMatch: 'full' },
{path:'NewTask',component:NewTaskComponent},
{path:'NewProject',component:NewProjectComponent},
{path:'NewUsers',component:NewUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
