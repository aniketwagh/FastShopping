import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  result: IProduct[] = [];
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data: IProduct[]) => {
      console.log(data);
      this.result = data;
      // for cart use------------------------

      this.result.forEach((a: any) => {

        Object.assign(a, { quantity: 1, total: a.Price })
      });
    });
  }
    addtocart(item: any){
      this.cartService.addtoCart(item);
    }
  }

