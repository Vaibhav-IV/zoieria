import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {


  products = [
    {id: 1, name: 'ABC', description: 'Nice'},
    {id: 2, name: 'ABC', description: 'Nice'},
    {id: 3, name: 'ABC', description: 'Nice'},
    {id: 4, name: 'ABC', description: 'Nice'},
    {id: 5, name: 'ABC', description: 'Nice'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
