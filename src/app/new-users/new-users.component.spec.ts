import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewUsersComponent } from './new-users.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { TaskService } from '../shared/task.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import{RouterModule} from '@angular/router';

describe('NewUsersComponent', () => {
  let component: NewUsersComponent;
  let fixture: ComponentFixture<NewUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUsersComponent,AppComponent ],
      imports: [ FormsModule, HttpClientModule,BrowserModule,RouterModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
