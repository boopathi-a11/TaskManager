import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewProjectComponent } from './new-project.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { TaskService } from '../shared/task.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import{RouterModule} from '@angular/router';

describe('NewProjectComponent', () => {
  let component: NewProjectComponent;
  let fixture: ComponentFixture<NewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectComponent,AppComponent ],
      imports: [ FormsModule, HttpClientModule,BrowserModule,RouterModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
