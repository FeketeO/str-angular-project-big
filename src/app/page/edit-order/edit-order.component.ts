import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Order } from '../../model/order';
import { OrderService } from 'src/app/service/order.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  order$: Observable<Order> = this.activatedRoute.params.pipe(
    switchMap(params => this.orderService.get(params.id))
  );

  statuses: string[] = ["new", "shipped", "paid"];
  
  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  updating: boolean = false;

  onUpdate(form: NgForm, order: Order): void {
    if (order.id === 0) {
      this.orderService.create(order);
    } else {
      this.updating = true;
      this.orderService.update(order);
    }
    this.router.navigate([''])
  }

}
