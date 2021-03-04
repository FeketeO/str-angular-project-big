import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { MytoastrService } from 'src/app/service/mytoastr.service';

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
  piece: any;
  update: boolean = false;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private mytoastr: MytoastrService,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
    this.sum();
    this.pc();
      
  }

  sum(): void {
    this.orderService.getAllsum().subscribe(data => {
      this.summa = data
        .map(item => item.amount)
        .reduce((x, y) => parseInt('' + x) + parseInt('' + y));
    },
    error=>this.mytoastr.showError())
  }

  pc(): void {
    this.orderService.getAllsum().subscribe(data => {
      this.piece = data
        .map(item => item.id)
        .length;
    },
    error=>this.mytoastr.showError())
  } 

  onDelete(order: Order): void {
    this.update = true;
    this.orderService.remove(order),
      this.router.navigate(['order']),
      this.update = false;
  }  

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.irany = !this.irany;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
    this.sum();
    this.pc();
  }
  showSuccess(): void {
    this.mytoastr.showSuccess();
  }
  
  showError(): void {
    this.mytoastr.showError();
  }
}


