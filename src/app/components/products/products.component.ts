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
  public filterproductCategories: any;
  searchKey:string="";

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data: IProduct[]) => {
      console.log(data);
      this.result = data;
      this.filterproductCategories = data;
      // for cart use------------------------
      this.result.forEach((a: any) => {
        if(a.productCategories==="Electronics"){
          a.productCategories="Electronics";
        }
        Object.assign(a, { quantity: 1, total: a.Price })
      });
      console.log(this.result);
    });
    this.cartService.search.subscribe((data:any)=>{
    this.searchKey = data;
    })
  }
    addtocart(item: any){
      this.cartService.addtoCart(item);
    }
    filter(productCategories:string){
      this.filterproductCategories = this.result.filter((a:any)=>{
        if(a.productCategories==productCategories || productCategories=='')
        return a;
      })
    }
  }

