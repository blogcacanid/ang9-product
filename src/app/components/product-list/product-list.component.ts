import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public Product: Object;
  public temp: Object=false;

  dtOptions: DataTables.Settings = {};

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ){ 
    this.readProduct();
  }

  ngOnInit(): void {
  }

  readProduct(){
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true
      };
    this.apiService.getProducts().subscribe((data) => {
     this.Product = data;
          this.temp = true;
    })    
  }

}
