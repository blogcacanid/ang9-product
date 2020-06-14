import { Component, OnInit } from '@angular/core';
import { Product } from './../../model/Product';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

productID: any; //Getting Product id from URL
productData: any; //Getting Product details

  constructor(
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this. productID = this.actRoute.snapshot.params['id'];
    this.getDetails(this.productID);
  }


  getDetails(productID){
    this.apiService.getProduct(productID).subscribe(product => {
      this.productData = product;
    });
  }

  navigation(link){
    this.router.navigate([link]);
  }

}
