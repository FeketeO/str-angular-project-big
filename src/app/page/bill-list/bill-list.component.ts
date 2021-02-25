import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  billList: BehaviorSubject<Bill[]> = this.billService.billList$;
  filterKey: string = 'orderID';
  filterKeys: string[] = Object.keys(new Bill());

  constructor(
    private billService: BillService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.billService.getAll();
  }


  onRemove(bill: Bill): void {
    this.billService.remove(bill),
      this.router.navigate(['bill'])
  }

  irany: boolean = false;
  columnKey: string = '';
  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.irany = !this.irany;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
  phrase: string = '';

}
