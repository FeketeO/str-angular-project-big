import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from '../../service/customer.service';
import { CustomersortingService } from '../../service/customersorting.service'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  phrase: string = '';
  irany: number = 1;
  key: number | string = '';
  columnKey: string = '';
  filterKey: string = 'firstName';
  filterKeys: string[] = (Object.keys(new Customer()).concat(Object.keys(new Address()))).filter(item => !item.includes("address")).filter(item => !item.includes("notes"));

  customerList: BehaviorSubject<Customer[]> = this.customerService.list$;

  direction: string = 'asc';
  arr: any = '';
  props: string ='[]';

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private customerSortService: CustomersortingService,

  ) { }

  ngOnInit(): void {
    this.customerService.getAll();
  }
  onRemove(customer: Customer): void {
    this.customerService.remove(customer),
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

  onColumnSelect(key: string): void {
    this.customerSortService.sortyObjectByProp(this.arr, this.direction, this.props)
  }


  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }



}
