import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/common/info-card/info-card.component';

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
      footer: 'ide is jön valami',
      icon: 'account_circle',
    },
    {
      title: 'Products',
      content: '50',
      cardClass: 'card-header-success',
      footer: 'ide is jön valami',
      icon: 'store',
    },
    {
      title: 'Orders',
      content: '10',
      cardClass: 'card-header-primary',
      footer: 'ide is jön valami',
      icon: 'shopping_cart',
    },
    {
      title: 'Followers',
      content: '1',
      cardClass: 'card-header-info',
      footer: 'Follow us!',
      icon: 'pan_tool',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
