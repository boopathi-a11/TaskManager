import { Injectable } from '@angular/core';
import { Task, Project, Users } from './task';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  formData : Task;
  formData1 : Project;
  formData2 : Users;
  list: Task[];
  list1: Project[];
  list2: Users[];

  constructor(private http: HttpClient) { }


readonly configTaskUrl = 'http://localhost:2504/api/TaskDetail';
readonly configProjectUrl = 'http://localhost:2504/api/ProjectDetail';
readonly configProjectUserUrl = 'http://localhost:2504/api/ProjectUser';

getConfig(formData:Task) {
  return this.http.post(this.configTaskUrl, formData);
}

getlist(){
  this.http.get(this.configTaskUrl).toPromise().then(res=>this.list=res as Task[]);
}

getlist1(TaskName:string){
  let paramTaskName=new HttpParams().set('strTaskName',TaskName);
  this.http.get(this.configTaskUrl,{params:paramTaskName}).toPromise().then(res=>this.list=res as Task[]);
 // this.http.get<Task>(this.configUrl);
}
  
updateTask(formData:Task){
 return this.http.put(this.configTaskUrl+"/"+formData.Task_ID,formData);
}

DeleteTask(id:number){
  return this.http.delete(this.configTaskUrl+"/"+id);
}

AddProjectDetails(formData:Project){
  return this.http.post(this.configProjectUrl, formData);
}


AddUsers(formData:Users){
  return this.http.post(this.configProjectUserUrl, formData);
}

GetProjectList(){
  this.http.get(this.configProjectUrl).toPromise().then(res=>this.list1=res as Project[]);
}

updateProject(formData:Project){
  return this.http.put(this.configProjectUrl+"/"+formData.Project_ID,formData);
 }

 DeleteProject(id:number){
  return this.http.delete(this.configProjectUrl+"/"+id);
}

SortProject(SortBy:string){
  let paramSortBy=new HttpParams().set('strSortBy',SortBy);
  this.http.get(this.configProjectUrl,{params:paramSortBy}).toPromise().then(res=>this.list1=res as Project[]);
}

GetUsersList(){
  this.http.get(this.configProjectUserUrl).toPromise().then(res=>this.list2=res as Users[]);
}

updateUser(formData:Users){
  return this.http.put(this.configProjectUserUrl+"/"+formData.User_ID,formData);
 }

 DeleteUser(id:number){
  return this.http.delete(this.configProjectUserUrl+"/"+id);
}

SortUser(SortBy:string){
  let paramSortBy=new HttpParams().set('strSortBy',SortBy);
  this.http.get(this.configProjectUserUrl,{params:paramSortBy}).toPromise().then(res=>this.list2=res as Users[]);
}


}
