import { Component, Input, OnInit } from '@angular/core';

export interface GraphCard {
 cardClass: string;
 id: string;
 title: string
 comment: string;
 footer: string;
}

@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.scss']
})
export class GraphCardComponent implements OnInit {

  @Input() cardClass: string='';
  @Input() id: string='';
  @Input() title: string='title';
  @Input() comment: string='';
  @Input() footer: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
