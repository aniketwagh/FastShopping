import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService) { }

  checkoutdata:any[]=[];
  grandTotal:number=0;
  ngOnInit(): void 
  {
   this.cartService.checkoutlist.subscribe(res=>{
    let data:any[]=res;
    
    if(data.length>0)
    {
      this.checkoutdata=data
      

  }
  else{
    this.checkoutdata=[]
  }
  console.log("checkoutdata",this.checkoutdata)
  this.calculatePrice()
})
  }
  calculatePrice(){
    if(this.checkoutdata.length>0)
    {
  this.grandTotal=this.checkoutdata.map(pr=>parseInt(pr.productTotal)).reduce((prev,curr)=>{
      return prev+curr
    })
  }
}

}
