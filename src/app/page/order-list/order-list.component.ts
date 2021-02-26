import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderList: BehaviorSubject<Order[]> = this.orderService.list$;

  columnKey: string = '';
  phrase: string = '';
  filterKey: string = 'amount';
  filterKeys: string[] = Object.keys(new Order());
  irany: boolean = false;

  constructor(
    private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
  }

  /* totals = this.orderList;
  sum = this.totals.reduce((a,b)=>a+b); */

  onDelete(order: Order): void {
    this.orderService.remove(order),
      this.router.navigate(['order'])
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.irany = !this.irany;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}


