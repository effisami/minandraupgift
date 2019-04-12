import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Destination } from '../destination';

@Component({
  selector: 'app-resechild',
  templateUrl: './resechild.component.html',
  styleUrls: ['./resechild.component.css']
})
export class ResechildComponent implements OnInit {
@Input()reseplats : string;
@Input()rutt : string;
@Output()onSelected = new EventEmitter<Destination>();
  constructor() { }

  ngOnInit() {
  }
valdResa(){
  this.onSelected.emit({
    destination: this.reseplats,
    rutt: this.rutt
  })
}
}
