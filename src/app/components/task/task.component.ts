import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITask } from 'src/app/model/itask';
import { TaskSerService } from 'src/app/services/task-ser.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public taskList : ITask [] =this.TaskSer.taskList

  newTask:string=''

  constructor(private TaskSer:TaskSerService) {
    this.TaskSer.taskList=this.taskList
   }

  ngOnInit() {
  }

  addTask(){

    this.taskList.push({
      state:true,
      description:this.newTask
    });
    this.TaskSer.taskList=this.taskList

  }

  onCheckboxChange(e:any,task:ITask) {

    console.log(e)
    console.log(e.target)

    if (e.target.checked) {
console.log('cjc')
task.state=true
this.TaskSer.taskList=this.taskList

  }
  else {
task.state=false

    console.log('sert')

    this.TaskSer.taskList=this.taskList

    }
  }


  removeTask(index:number){
    if(index > -1){
      this.taskList.splice(index,1);
    }
    this.TaskSer.taskList=this.taskList

  }
}
