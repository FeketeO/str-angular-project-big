import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from '../../service/customer.service';
import { MytoastrService } from 'src/app/service/mytoastr.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  phrase: string = '';
  irany:boolean=false;
  key: number | string = '';
  columnKey: string = '';
  filterKey: string = 'firstName';

  filterKeys: string[] = (Object.keys(new Customer()).concat(Object.keys(new Address()))).filter(item => !item.includes("address")).filter(item => !item.includes("notes"));

  customerList: BehaviorSubject<Customer[]> = this.customerService.list$;

  activecustomer:number=0;
  activeCount():void{
    this.customerService.getAllsum().subscribe(data=>
      this.activecustomer=data.filter(item=>item.active).length)
    }
    customerCounted:number=0;
    customerCount(): void {
      this.customerService.getAllsum().subscribe(data => {
        this.customerCounted = data.map(item => item.id).length;
      },
        error => this.mytoastr.showError())
    }

    showSuccess(): void {
      this.mytoastr.showSuccess();
    }

    showError(): void {
      this.mytoastr.showError();
    }

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private mytoastr: MytoastrService,

  ) { }

  ngOnInit(): void {
    this.customerService.getAll();
    this.activeCount();
    this.customerCount();
  }

  onRemove(customer: Customer): void {
    this.customerService.remove(customer),
    this.activeCount(),
    this.customerCount(),
    this.router.navigate(['customer'])
  }

  // onColumnSelect(key: string): void {
  //   if (key === this.columnKey) {
  //     this.irany = this.irany * -1;
  //   }
  //   else {
  //     this.irany = 1;
  //   }
  //   this.columnKey = key;
  // };



  onColumnSelect(key:string):void{
    this.columnKey=key;
    this.irany=!this.irany;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
    this.activeCount();
    this.customerCount()
  }



}
