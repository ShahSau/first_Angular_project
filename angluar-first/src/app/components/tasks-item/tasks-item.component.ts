import { Component,Input,OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  faTimes = faTimes;
  @Input() task:Task;
  @Output() onDelete: EventEmitter<Task>= new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteCall(task:Task):void{
    console.log("delete", task)
    this.onDelete.emit(task)
  }
  
  onToggle(task:Task):void{
    this.toggleReminder.emit(task)
  }
 

}
