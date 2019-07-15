import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { Users } from '../shared/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {

  constructor(private service:TaskService) { }
  public model = new Users();
  public Buttonname:string="Add User";

  ngOnInit() {
    this.service.GetUsersList(); 
  }

  AddUser(formData:NgForm){
    if(this.model.User_ID ==null){
    this.service.AddUsers(this.model).subscribe(e=>{
      alert('New User Created Successfully..');
      this.Reset(formData);
      this.service.GetUsersList();
    });
  }
  else{
    this.service.updateUser(this.model).subscribe(s=>{
      alert('User Updated Successfully..');
      this.Reset(formData);
      this.service.GetUsersList();
});
  }
  }

  Reset(TaskName:NgForm): void{   
    this.Buttonname="Add User"; 
    TaskName.form.reset();
    this.model.User_ID=null;
  }
  
  UpdateUser(tas:Users){
    this.model.User_ID=tas.User_ID;
    this.model.First_Name=tas.First_Name;
    this.model.Last_Name=tas.Last_Name;
    this.model.Employee_ID=tas.Employee_ID;
    this.Buttonname="Update User";
   }
  
   DeleteUser(id:number){
    if(confirm('Are you sure want to Delete the User?')){
  this.service.DeleteUser(id).subscribe(res=>{
  this.service.GetUsersList();
  alert('User Deleted Successfully..'); 
    });
    }
  }

  SortFUser(){
    this.service.SortUser("FN");
  }

  SortLUser(){
    this.service.SortUser("LN");
  }

  SortUser(){
    this.service.SortUser("ID");
  }
}
