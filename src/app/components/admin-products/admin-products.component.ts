import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { Product } from 'src/app/models/Product';
import { AdminProductsService } from 'src/app/services/admin-products.service';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { NavigationEnd } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  products?: Product[]
  searchedProduct?: any
  currentProduct: Product = {}
  currentIndex = -1
  title = ''

  constructor(private productService: AdminProductsService,
    public dialog: MatDialog,
    private router: Router) {
    this.refreshList()
  }


  ngOnInit(): void {
    this.retrieveProducts()
    //this.refreshList()
  }

  retrieveProducts(): void {
    this.productService.getAll()
      .subscribe({
        next: (data) => {
          this.products = data //initialized at line 17
          console.log(data);
          //console.log(this.products);
          //console.log(Product);
        },
        complete:() =>{
        //this.ngOnInit();
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
    console.log(index,product.id);
  }

  removeAllProducts(): void {
    this.productService.deleteAll()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.refreshList();
        },
        error: (e) => console.error(e)
      })
  }

  searchTitle(): void {
    this.currentIndex = -1
    this.currentProduct = {}
    //console.log(this.title);
    
    this.productService.findById(this.title)
      .subscribe({
        next: (data) => {
          this.searchedProduct = data
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  searchByTitle(): void {
    this.currentIndex = -1
    this.currentProduct = {}

    this.productService.findByTitle(this.title)
    .subscribe({
      next: (data) => {
        console.log(this.title);
        
        this.searchedProduct = data
        console.log(data);
      },
      error: (e) => console.error(e)
    })
}

  openDialog() {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      height: '400px',
      width: '450px',
    });
  }

  openDeleteDialog() {
    const dialog = this.dialog.open(DeleteConfirmDialogComponent)
  }
}


