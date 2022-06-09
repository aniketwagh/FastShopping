import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product:any[]=[];
  public grandTotal !: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
      this.cartService.getProducts().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item:IProduct){
  this.cartService.removeCartItem(item)
  }
    
  emptycart(){
    this.cartService.removeAllCart();
  }
      
  calculatePrice(){
    if(this.product.length>0){
      this.grandTotal=this.product.map(pr=>parseInt(pr.productPrice)).reduce((prev,curr)=>{
        return prev+curr;
      })
    }
  }

}
