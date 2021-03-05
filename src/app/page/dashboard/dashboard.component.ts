import { Component, OnInit } from '@angular/core';

import { InfoCard } from 'src/app/common/info-card/info-card.component';
import { GraphCard } from 'src/app/common/graph-card/graph-card.component';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/model/order';
import { ProductService } from 'src/app/service/product.service';
import { OrderService } from 'src/app/service/order.service';
import { CustomerService } from 'src/app/service/customer.service';
import { BillService } from 'src/app/service/bill.service';
import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { DefaultNoAnimationsGlobalConfig } from 'ngx-toastr';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {




  cards: InfoCard[] = [
    {
      title: 'Products',
      content: '50',
      cardClass: 'card-header-success',
      footer: 'Numbers of active products',
      icon: 'store',
    },
    {
      title: 'Customers',
      content: '10',
      cardClass: 'card-header-warning',
      footer: 'Numbers of active customers',
      icon: 'account_circle',
    },
    {
      title: 'Orders',
      content: '30',
      cardClass: 'card-header-primary',
      footer: 'Numbers of !paid orders',
      icon: 'shopping_cart',
    },
    {
      title: 'Bill',
      content: '12',
      cardClass: 'card-header-info',
      footer: 'Numbers of !paid bills',
      icon: 'price_check',
    },
  ]

  graphs: GraphCard[] =[
    {
      cardClass: 'card-header-success',
      id: 'dailySalesChart',
      title: 'Daily Sales',
      comment: '30 % increase in today sales.',
      footer: 'updated 5 minutes ago',
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

  orderChartLabels: Label[] = ['all', 'new', 'shipped', 'paid'];
  orderChartData: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'Orders' },
  ];
  productsChartLabels: Label[] = ['all', 'featured', 'active'];
  productsChartData: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'Products'},
  ];
  customersChartLabels: Label[] = ['all', 'false', 'true'];
  customersChartData: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'Customers'},
  ];

  constructor(
    private productService:  ProductService,
    private orderService: OrderService,
    private customerService: CustomerService,
    private billService: BillService,
  ) { }

  ngOnInit(): void {
    this.combinatedSubscription = combineLatest([
      this.productService.list$,
      this.customerService.list$,
      this.orderService.list$,
      this.billService.getAllsum(),

    ]).subscribe(
      data => {
        this.cards[0].content = String(data[0].filter(o => o.active === true).length);
        this.cards[1].content = String(data[1].filter( o => o.active === true).length);
        this.cards[2].content = String(data[2].filter(o => o.status !== 'paid').length);
        this.cards[3].content = String(data[3].filter(o => o.status !== 'paid').
        map(item=>item.amount).reduce((a,b)=>a+b));
       
      


        const allOrders: number = data[2].length;
        const newOrders: number = data[2].filter( o=> o.status === 'new').length;
        const shippedOrders: number = data[2].filter( o=> o.status === 'shipped').length;
        const paidOrders: number = data[2].filter( o=> o.status === 'paid').length;
        this.orderChartData[0].data = [allOrders, newOrders, shippedOrders, paidOrders];

        const allProducts: number = data[0].length;
        const newProducts: number = data[0].filter(pr => pr.featured === true).length;
        const activeProducts: number = data[0].filter(pr => pr.active === true).length;
        this.productsChartData[0].data = [allProducts, newProducts,activeProducts];

        const allCustomers: number = data[1].length;
        const activeCustomers: number = data[1].filter(cu => cu.active === true).length;
        const nonActiveCustomers: number = data[1].filter(cu => cu.active === false).length;
        this.customersChartData[0].data = [allCustomers, activeCustomers, nonActiveCustomers];
      }
    );

    this.productService.getAll();
    this.orderService.getAll();
    this.customerService.getAll();
    this.billService.getAll();

    this.billService.getAllsum();


  }


}
