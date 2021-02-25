import { Component, OnInit } from '@angular/core';
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
      content: '102',
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
      title: '3. card',
      content: 'Hali',
      cardClass: 'card-header-danger',
      footer: 'ide is jön valami',
      icon: 'info_outline',
    },
    {
      title: '4. card',
      content: 'Hali',
      cardClass: 'card-header-info',
      footer: 'ide is jön valami',
      icon: 'update',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
