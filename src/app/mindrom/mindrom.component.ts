import { Component, OnInit } from '@angular/core';
import { MindataService } from '../mindata.service';

@Component({
  selector: 'app-mindrom',
  templateUrl: './mindrom.component.html',
  styleUrls: ['./mindrom.component.css']
})
export class MindromComponent implements OnInit {
valdDrom:string []= [];
minLista:string[]=null;
mindataService:MindataService;
  constructor(mindataService: MindataService) { 
  this.mindataService=mindataService
  }

  ngOnInit() {
    console.log("samira", this.mindataService)
    this.minLista = this.mindataService.getData()
    
    console.log("sami" ,this.minLista)
 
  }
  makeradElement(artickle: string){
 if(!this.valdDrom.includes(artickle)){
   this.valdDrom.push(artickle);
 }else {
   
   let index= this.valdDrom.indexOf(artickle);
   if(index >= 0)
   this.valdDrom.splice(index,1);
 }
  }
}
