import { Component, OnInit } from '@angular/core';
import { Product } from './../../model/Product';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

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

  removeProduct() {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteProduct(this. productID)
          .subscribe(res => {
            this.router.navigateByUrl('/product-list');
            console.log('Content deleted successfully!')
          }, (error) => {
            console.log(error)
          })
    }
  }

  navigation(link){
    this.router.navigate([link]);
  }

}
