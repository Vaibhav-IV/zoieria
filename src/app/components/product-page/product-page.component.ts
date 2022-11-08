import { Component, OnInit, Input } from '@angular/core';
import { Router,Route, ActivatedRoute } from '@angular/router';
import { AdminProductsService } from 'src/app/services/admin-products.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  
  routeSub: any;
  currentid: any

  @Input() currentProduct: Product ={
    title: '',
    description:'',
    cost: 10,
    image: '',
    published:false
  }


  constructor(private route: ActivatedRoute,
  private productService: AdminProductsService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.currentid = this.route.snapshot.paramMap.get('id');
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      console.log(this.currentid);


      this.getProduct(this.currentid)
    });
  }

  getProduct(id:String): void{
    this.productService.get(id)
    .subscribe({
      next: (data) =>{
        this.currentProduct = data;
        console.log(data);
        //console.log(this.products);
      },
      error: (e) => console.error(e)
    })
  }

}
