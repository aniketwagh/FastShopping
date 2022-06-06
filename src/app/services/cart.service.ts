import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:IProduct[]=[]
  public productList=new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservable();

  }
  setProducts(product :any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += Number(a.total);
    })
    return grandTotal;
  }
  removeCartItem(product: IProduct){
      for(let i=0;i<this.cartItemList.length;i++){
      if(this.cartItemList[i].productId === product.productId){
      this.cartItemList.splice(i,1);
      }
    }
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }
}
