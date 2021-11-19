import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  results: any
  constructor(private customerService: CustomerService) { }
  
  ngOnInit(): void {
    this.customerService.getList().subscribe(data => {
      this.results = data;
    })
  }

}
