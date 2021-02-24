import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  bill$: Observable<Bill> = this.activatedRoute.params.pipe(
    switchMap(params => this.billService.get(params.id))
  );

  statuses: string[] = ["new", "paid"];

  constructor(
    private billService: BillService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  updating: boolean = false;

  onUpdate(form: NgForm, bill: Bill): void {
    if (bill.id === 0) {
      this.billService.create(bill);
    } else {
      this.updating = true;
      this.billService.update(bill);
    }
    this.router.navigate([''])
  }


}
