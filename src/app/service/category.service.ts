import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  list: Category[] = [
    {id:1, name:"Autók", description: 'Bizonyított megbízhatóság,kézműves minőségű kidolgozás és luxus kényelmű utastér'},
    {id:2, name:"Sportautók", description: 'Fejlettebbek, gyorsabbak, kényelmesebbek, és több funkciókkal és szolgáltatásokkal rendelkeznek, mint valaha'},
    {id:3, name:"Terepjárók", description: 'Nem ismer lehetetlent az extrém környezetben sem'},
  ];
  
  constructor() { }
}
