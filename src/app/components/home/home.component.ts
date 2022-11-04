import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { AdminProductsService } from 'src/app/services/admin-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productService: AdminProductsService) { }

  products?: Product[]
  currentProduct: Product = {}
  currentIndex = -1
  title = ''

  ngOnInit(): void {
    this.retrieveProducts()
  }

  retrieveProducts():void{
    this.productService.getAll()
    .subscribe({
      next:(data) =>{
        this.products = data //initialized at line 17
        console.log(data);
      },
      error: (e) => console.error(e)
    })
  }

  
  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {}
    this.currentIndex = -1
  }

  setActiveProduct(product: Product, index: number): void {
    this.currentIndex = index
    this.currentProduct = product
    console.log(index,product);
  }


}
