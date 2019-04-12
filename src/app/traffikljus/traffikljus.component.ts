import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffikljus',
  templateUrl: './traffikljus.component.html',
  styleUrls: ['./traffikljus.component.css']
})
export class TraffikljusComponent implements OnInit {

  constructor() { }
  state: number = 0;
  
  onRegisterClick(){
    if(this.state== 3){
      this.state=0;
    }
    else{
      this.state+= 1
    }
  }
  ngOnInit() {
  }

}
