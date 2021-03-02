import { Component, OnInit } from '@angular/core';

import { InfoCard } from 'src/app/common/info-card/info-card.component';
import { GraphCard } from 'src/app/common/graph-card/graph-card.component';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/model/order';
import { ProductService } from 'src/app/service/product.service';
import { OrderService } from 'src/app/service/order.service';
import { CustomerService } from 'src/app/service/customer.service';
import { BillService } from 'src/app/service/bill.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {




  cards: InfoCard[] = [
    {
      title: 'Customers',
      content: '0',
      cardClass: 'card-header-warning',
      footer: 'Numbers of customers',
      icon: 'account_circle',
    },
    {
      title: 'Products',
      content: '50',
      cardClass: 'card-header-success',
      footer: 'Numbers os products',
      icon: 'store',
    },
    {
      title: 'Orders',
      content: '30',
      cardClass: 'card-header-primary',
      footer: 'Numbers of orders',
      icon: 'shopping_cart',
    },
    {
      title: 'Bill',
      content: '12',
      cardClass: 'card-header-info',
      footer: 'Numbers of bills',
      icon: 'price_check',
    },
  ]

  graphs: GraphCard[] =[
    {
      cardClass: 'card-header-success',
      id: 'dailySalesChart',
      title: 'Daily Sales',
      comment: '30 % increase in today sales.',
      footer: 'updated 4 minutes ago',
     },
    {
      cardClass: 'card-header-warning',
      id: 'websiteViewsChart',
      title: 'Email Subscriptions',
      comment: 'Last Campaign Performance',
      footer: 'campaign sent 2 days ago',
     },
    {
      cardClass: 'card-header-danger',
      id: 'completedTasksChart',
      title: 'Completed Tasks',
      comment: 'Last Campaign Performance',
      footer: 'campaign sent 2 days ago',
    },

  ]

  combinatedSubscription: Subscription = new Subscription();

  constructor(
    private productService:  ProductService,
    private orderService: OrderService,
    private customerService: CustomerService,
    private billService: BillService,
  ) { }

  ngOnInit(): void {
    this.combinatedSubscription = combineLatest([
      this.productService.list$,
      this.orderService.list$,
      this.customerService.list$,
      this.billService.billList$,
    ]).subscribe(
      data => {
        this.cards[0].content = String(data[2].length);
        this.cards[1].content = String(data[0].length);
        this.cards[2].content = String(data[1].length);
        this.cards[3].content = String(data[3].length);

      }
    );
    this.productService.getAll();
    this.orderService.getAll();
    this.customerService.getAll();
    this.billService.getAll();
  }

}
