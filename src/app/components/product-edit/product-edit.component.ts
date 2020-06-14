import { Component, OnInit } from '@angular/core';
import { Product } from './../../model/Product';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  productData: Product[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateProduct();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getProduct(id);
    this.editForm = this.fb.group({
      product_name: ['', [Validators.required]],
      product_price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getProduct(id) {
    this.apiService.getProduct(id).subscribe(data => {
      this.editForm.setValue({
        product_name: data['product_name'],
        product_price: data['product_price'],
      });
    });
  }

  updateProduct() {
    this.editForm = this.fb.group({
      product_name: ['', [Validators.required]],
      product_price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure UPDATE this record ?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateProduct(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/product-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
