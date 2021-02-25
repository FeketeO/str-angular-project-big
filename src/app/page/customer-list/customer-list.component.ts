import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  phrase: string = '';
  irany: boolean = false;
  columnKey: string = '';
  filterKey: string = 'firstName';
  filterKeys: string[] = Object.keys(new Customer()).concat(Object.keys(new Address()));

  customerList: BehaviorSubject<Customer[]> = this.customerService.list$;
  constructor(
    private customerService: CustomerService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.customerService.getAll();
  }
  onRemove(customer: Customer): void {
    this.customerService.remove(customer),
      this.router.navigate(['customer'])
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.irany = !this.irany;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
}
