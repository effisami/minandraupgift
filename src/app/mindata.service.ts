import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MindataService {
minLista: string []=
['Dricka', 'frisk','Pengar']
  constructor() { }
  getData(): string[]{
    return this.minLista;
  }
}
