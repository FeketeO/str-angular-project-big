import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.scss']
})
export class GraphCardComponent implements OnInit {

  @Input() cardClass: string='card-header-success';
  @Input() title: string='';
  @Input() sales: number=0;
  @Input() comment: string='% increase in today sales.';
  @Input() footer: string='updated 12 minutes ago';

  constructor() { }

  ngOnInit(): void {
  }

}
