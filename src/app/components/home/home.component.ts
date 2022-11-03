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


}
