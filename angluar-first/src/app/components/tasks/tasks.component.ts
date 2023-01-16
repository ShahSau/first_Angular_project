import { Component, OnInit } from '@angular/core';
//import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { Observable, of,tap,map } from 'rxjs';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
}) 
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(
    private taskService : TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().pipe(
      tap((tasks)=>console.log(tasks)),
      map((tasks)=>this.tasks=tasks)
    ).subscribe()
  }
  deleteTask(task:Task):void{
    this.taskService.deleteTask(task).subscribe(()=>(this.tasks = this.tasks.filter(t=> t.id !== task.id)))
  }
  changeReminder(task:Task):void{
    task.reminder = task.reminder ? false : true
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
