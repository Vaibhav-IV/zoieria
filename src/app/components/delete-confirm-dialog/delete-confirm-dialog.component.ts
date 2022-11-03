import { Component, OnInit } from '@angular/core';
import { AdminProductsService } from 'src/app/services/admin-products.service';


@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {

  constructor(private productService: AdminProductsService) { }

  ngOnInit(): void {
  }

  removeAllProducts():void{
    this.productService.deleteAll()
    .subscribe({
      next: (data) =>{
        console.log(data);
        //this.refreshList();
      },
      error: (e) => console.error(e)
    })
  }

}
