import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderList: BehaviorSubject<Order[]> = this.orderService.list$;
  orderListsum$: Observable<Order[]> = this.orderService.getAllsum();
  columnKey: string = '';
  phrase: string = '';
  filterKey: string = 'amount';
  filterKeys: string[] = Object.keys(new Order());
  irany: boolean = false;
  summa: any;
  darab: any;
  alertSuccess: boolean = false;
  constructor(
    private orderService: OrderService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
    this.sum();
    this.db();
    this.showSuccess();
    this.showError();
  }

  sum(): void {
    this.orderService.getAllsum().subscribe(data => {
      this.summa = data
        .map(item => item.amount)
        .reduce((x, y) => parseInt('' + x) + parseInt('' + y));
    })
  }

  db(): void {
    this.orderService.getAllsum().subscribe(data => {
      this.darab = data
        .map(item => item.id)
        .length;
    })
  }

  onDelete(order: Order): void {
    this.orderService.remove(order),
      this.router.navigate(['order']);
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.irany = !this.irany;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  showSuccess(): void {
    this.toastr.success("Action succeeded!", 'Toastr fun!', {
      timeOut: 3000,
    });
  }

  showError(): void {
    this.toastr.error('Something is wrong', 'Error', {
      timeOut: 3000,
    });
  }
}