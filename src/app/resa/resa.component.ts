import { Component, OnInit } from '@angular/core';
import { Destination } from '../destination';

@Component({
  selector: 'app-resa',
  templateUrl: './resa.component.html',
  styleUrls: ['./resa.component.css']
})
export class ResaComponent implements OnInit {

  constructor() { }
  reseplats: Destination []=[
    {
      destination : 'Tehran',
      rutt : 'med  cyckel' ,
    },
    {
      destination : 'Ibiza',
      rutt : 'med  simma' ,
    },
    {
      destination : 'Tylösand',
      rutt : 'med  bil' ,
    },
  ];
    ngOnInit() {
  }
valdDestination:Destination = null;

valdResa (Destination) {
  this.valdDestination=Destination;

}

}
