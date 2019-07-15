import { Component, OnInit, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  //private toastr:ToastrService
  constructor(private service:TaskService) { }
  public model = new Task();
  public isView:boolean = false;
  public isAdd:boolean = true;
  public searchTaskName : string;
  public SearchList:Task = new Task();
  public Buttonname:string="Add Task";
  public TaskName1:string="";
  public PTaskName1:string="";
  public priorityFrom?:number;
  public priorityTo?:number;
  public StartDate1:Date;
  public EndDate1:Date;
  ngOnInit() {
    this.model.Task_Priority=0;
    // this.service.getlist().subscribe(e => {
    //   this.SearchList = e;
    // })
    this.service.getlist();
    this.service.GetProjectList();
    this.service.GetUsersList();
  }
  
  Reset(TaskName:NgForm): void{   
    this.Buttonname="Add Task"; 
    TaskName.form.reset();
    this.model.Task_ID=null;
  }
  
  AddTask(formData:NgForm){
    if(this.model.Task_ID ==null){
    this.service.getConfig(this.model).subscribe(e => {
      alert('New Task Created Successfully..');
      //this.toastr.success('New Task Created Successfully..','Add Task');
      this.Reset(formData);
      this.service.getlist();
      this.model.Task_Priority=0;
    });
  }
  else{
    this.service.updateTask(this.model).subscribe(s=>{
      alert('Task Updated Successfully..');
     // this.toastr.info('Task Updated Successfully..','Update Task');
      this.Reset(formData);
      this.service.getlist();
      this.model.Task_Priority=0;
      this.viewTask();
});
  }
 
  }
  viewTask() {
this.isView = !this.isView;
this.isAdd = !this.isAdd;
  }

  addTask(){
    this.isAdd = !this.isAdd;
    this.isView = !this.isView;
  }

  UpdateTask(tas:Task){
   this.model.Task_ID=tas.Task_ID;
   this.model.Task_Name=tas.Task_Name;
   this.model.Parent_Task_Name=tas.Parent_Task_Name;
   this.model.Task_Priority=tas.Task_Priority;
   this.model.Start_date= tas.Start_date;
   this.model.End_Date=tas.End_Date;
   this.model.ISTaskEnded="N";
   this.model.User_ID=tas.User_ID;
   this.model.Project_ID=tas.Project_ID;
   this.addTask();  
   this.Buttonname="Update Task";
  }
  

  EndTask(id:number){
    if(confirm('Are you sure want to End the task?')){
  this.service.DeleteTask(id).subscribe(res=>{
  this.service.getlist();
  alert('Task Ended Successfully..');
  //this.toastr.warning('Task Ended Successfully..','End Task');   
});
    }
  }

  Search(formData:NgForm){
    this.service.getlist1(this.TaskName1);
  }

  Clear(){
   this.TaskName1="";
   this.PTaskName1="";
   this.priorityFrom=null;
   this.priorityTo=null;
   this.StartDate1=null;
   this.EndDate1=null;
   this.service.getlist();
  }

  SortSDate(){
    this.service.getlist1("SD");
  }

  SortEDate(){
    this.service.getlist1("ED");
  }

  SortPriority(){
    this.service.getlist1("P");
  }
}
