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

  constructor(private productService: AdminProductsService) {}

  ngOnInit(): void {
    //this.retrieveProducts()
  }

  product: Product = {
    title:'',
    description:'',
    cost: 10
  };
  submitted =  false

  saveProduct():void{
    const data = {
      title: this.product.title,
      description: this.product.description ,
      cost: this.product.cost
    };

    this.productService.create(data)
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.submitted = true;
      },
      // complete:() =>{
      //   this.retrieveProducts()
      // },
      error: (e) => console.error(e)
    })
  }

  newProduct():void{
    this.submitted = false;
    this.product = {
      title:'',
      description:'',
      cost: 10
    };
  }

  // products?: Product[]
  // retrieveProducts():void{
  //   this.productService.getAll()
  //   .subscribe({
  //     next:(data) =>{
  //       this.products = data
  //       console.log(this.products);
  //     },
  //     error: (e) => console.error(e)
  //   })
  // }

}
