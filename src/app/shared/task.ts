export class Task {
  Task_ID :number;
  Task_Name :string;
  Parent_Task_Name :string;
  Start_date :Date;
  End_Date  :Date;
  Task_Priority :number;
  ISTaskEnded :string;
  User_ID:number;
  Project_ID:number;
}

export class Project {
  Project_ID :number;
  Project_Name :string;
  Start_date :Date;
  End_Date  :Date;
  Project_Priority :number;
}

export class Users {
  User_ID :number;
  First_Name :string;
  Last_Name :string;
  Employee_ID :number;
}

