import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../shared/task.service';
import { Project } from '../shared/task';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private service:TaskService) { }  
  public model = new Project();
  public Buttonname:string="Add Project";
  ngOnInit() {
    this.service.GetProjectList();
    this.model.Project_Priority=0;
  }

  AddProject(formData:NgForm){
    if(this.model.Project_ID ==null){
    this.service.AddProjectDetails(this.model).subscribe(e=>{
      alert('New Project Created Successfully..');
      this.Reset(formData);
      this.model.Project_Priority=0;
      this.service.GetProjectList();
    });
  }
  else{
    this.service.updateProject(this.model).subscribe(s=>{
      alert('Project Updated Successfully..');
      this.Reset(formData);
      this.service.GetProjectList();
      this.model.Project_Priority=0;
    });
  }
  }

  DeleteProject(id:number){
    if(confirm('Are you sure want to Suspend the Project?')){
      this.service.DeleteProject(id).subscribe(res=>{
      this.service.GetProjectList();
      alert('Project Suspended Successfully..');  
    });
    }
  }
  

  Reset(TaskName:NgForm): void{   
    this.Buttonname="Add Project"; 
    TaskName.form.reset();
    this.model.Project_ID=null;
  }

  UpdateProject(tas:Project){
    this.model.Project_ID=tas.Project_ID;
    this.model.Project_Name=tas.Project_Name;
    this.model.Start_date=tas.Start_date;
    this.model.End_Date=tas.End_Date;
    this.model.Project_Priority= tas.Project_Priority;
    this.Buttonname="Update Project";
   }

  SortSDate(){
    this.service.SortProject("SD");
  }

  SortEDate(){
    this.service.SortProject("ED");
  }

  SortPriority(){
    this.service.SortProject("");
  }
}
