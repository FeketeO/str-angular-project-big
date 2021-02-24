import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList: BehaviorSubject<Customer[]> = this.customerService.list$;
  constructor(
    private customerService: CustomerService,

  ) { }

  ngOnInit(): void {
     this.customerService.getAll();
  }


}
