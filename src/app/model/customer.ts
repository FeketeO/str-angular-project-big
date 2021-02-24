import { Address } from "./address";

export class Customer {
  id:number=0;
  firstname:string='';
  lastname:string='';
  address:Address= new Address;
  email:number=0;
  active:boolean=true;
}
