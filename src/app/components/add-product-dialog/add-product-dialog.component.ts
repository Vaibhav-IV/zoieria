import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Product } from 'src/app/models/Product';
import { AdminProductsService } from 'src/app/services/admin-products.service';

import { AdminProductsComponent } from '../admin-products/admin-products.component';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  constructor(private productService: AdminProductsService,
    private http: HttpClient) { }

  ngOnInit(): void {
    //this.retrieveProducts()
  }

  product: Product = {
    title: '',
    description: '',
    cost: 10,
    //image: '',
    published: false
  };
  submitted = false

  /* file upload */
  /* Variabe to store file data */
  filedata: any;
  /* File onchange event */
  fileEvent(e: any) {
    this.filedata = e.target.files[0];
    console.log(this.filedata);

  }

  saveProduct(): void {
    const data = {
      title: this.product.title,
      description: this.product.description,
      cost: this.product.cost,
      published: this.product.published
      //image: this.filedata
    }
    
    this.productService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        // complete:() =>{
        //   this.retrieveProducts()
        // },
        error: (e) => console.error(e)
      })
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      title: '',
      description: '',
      cost: 10,
      published: false
    };
  }


}
