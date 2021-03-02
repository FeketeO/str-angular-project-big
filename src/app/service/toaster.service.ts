import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

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
