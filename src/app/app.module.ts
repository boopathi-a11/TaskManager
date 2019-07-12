import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
//import { PipeFilter } from './Pipe-filter';
import { HttpClient } from 'selenium-webdriver/http';
import{RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewUsersComponent } from './new-users/new-users.component';
@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    NewProjectComponent,
    NewUsersComponent
   // PipeFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
