import { Component,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
@Output() onAddTask = new EventEmitter<Task>();
text:string='';
day:string='';
reminder:boolean= false;

showAddTask:boolean = false;
subscription:Subscription;

constructor(private uiService:UiService  = new UiService()){
  this.subscription = uiService.onToggle().subscribe((value)=>{
    this.showAddTask = value;
  })
}

onSubmit(){
  if(!this.text||this.text.length<1){
    alert('Please add a task');
    return ;
  }
  const newTask:Task =  {
    text:this.text,
    day:this.day,
    reminder:this.reminder
  }


  this.onAddTask.emit(newTask);


  //after emit//

  this.text = '';
  this.day = '';
  this.reminder =false;
}



}
