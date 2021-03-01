import { Component, OnInit } from '@angular/core';

import { InfoCard } from 'src/app/common/info-card/info-card.component';
import { GraphCard } from 'src/app/common/graph-card/graph-card.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: InfoCard[] = [
    {
      title: 'Customers',
      content: 0,
      cardClass: 'card-header-warning',
      footer: 'ide is jön valami',
      icon: 'account_circle',
    },
    {
      title: 'Products',
      content: 50,
      cardClass: 'card-header-success',
      footer: 'ide is jön valami',
      icon: 'store',
    },
    {
      title: 'Orders',
      content: 50,
      cardClass: 'card-header-primary',
      footer: 'ide is jön valami',
      icon: 'shopping_cart',
    },
    {
      title: 'Followers',
      content: 1,
      cardClass: 'card-header-info',
      footer: 'Follow us!',
      icon: 'pan_tool',
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



  constructor(

  ) { }

  ngOnInit(): void {
  }

}
