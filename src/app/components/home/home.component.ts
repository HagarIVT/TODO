import { Component, OnInit } from '@angular/core';
import { TaskSerService } from 'src/app/services/task-ser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ser:TaskSerService) { }

  ngOnInit(): void {
  }

  sh(){
console.log(this.ser.taskList)
  }
}
