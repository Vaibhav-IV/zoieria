import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { AdminProductsService } from 'src/app/services/admin-products.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data!: string;
  smdun!: void;

  constructor(private productService: AdminProductsService,
    private router: Router,
     private user: UserService,
      private authService: AuthServiceService) { }

  products?: Product[]
  currentProduct: Product = {}
  currentIndex = -1
  title = ''
  namee = ''
  nammee =  localStorage.getItem('userData');

  ngOnInit(): void {
    this.retrieveProducts()
  }

  retrieveProducts(): void {
    this.productService.getAll()
      .subscribe({
        next: (data) => {
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
    console.log(index, product);
  }

  //public khichi_hui_info: any
  current: any;
  public loading: boolean = false

  printDetails(){
   var namee =  localStorage.getItem('userData');
   this.data = this.namee 
   console.log(namee);
  }
  
  logout(){
    this.user.clearStorage();
    this.router.navigate(['']);
  }

}
