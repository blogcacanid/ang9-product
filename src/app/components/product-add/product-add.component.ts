import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  submitted = false;
  productForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ){ 
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.productForm = this.fb.group({
      product_name: ['', [Validators.required]],
      product_price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Getter to access form control
  get myForm(){
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.productForm.valid) {
      return false;
    } else {
      this.apiService.createProduct(this.productForm.value).subscribe(
        (res) => {
          console.log('Product successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/product-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
