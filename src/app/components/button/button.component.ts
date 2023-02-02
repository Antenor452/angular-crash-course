import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input() text:string ='text';
@Input() color:string='color';
@Output() btnClick = new EventEmitter();

constructor() {}

onClick(){
this.btnClick.emit();

}

}
