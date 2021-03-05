import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { MytoastrService } from 'src/app/service/mytoastr.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  billList: BehaviorSubject<Bill[]> = this.billService.billList$;
  billListsum$: Observable<Bill[]> = this.billService.getAllsum();
  columnKey: string = '';
  phrase: string = '';
  filterKey: string = 'orderID';
  filterKeys: string[] = Object.keys(new Bill());
  irany: boolean = false;
  summa: any;
  piece: any;
  update: boolean = false;

  constructor(
    private billService: BillService,
    private router: Router,
    private mytoastr: MytoastrService
  ) { }

  ngOnInit(): void {
    this.billService.getAll();
    this.sum();
    this.pc();
  }

  sum(): void {
    this.billService.getAllsum().subscribe(data => {
      this.summa = data.map(item => item.amount)
        .reduce((x, y) => parseInt('' + x) + parseInt('' + y));
    },
      error => this.mytoastr.showError())
  }

  pc(): void {
    this.billService.getAllsum().subscribe(data => {
      this.piece = data.map(item => item.id).length;
    },
      error => this.mytoastr.showError())
  }

  onRemove(bill: Bill): void {
    this.update = true;
    this.billService.remove(bill);
    this.sum();
    this.pc();
    this.router.navigate(['bill']);
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
