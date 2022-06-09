import { Component, OnInit } from '@angular/core';
import { Eproduct } from 'src/app/eproduct';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  result: Eproduct[]=[];

  constructor(private api:ApiService,private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getcategoriesdata().subscribe((data:Eproduct[]) =>{
      console.log(data);
      this.result = data;
  });
  }
  addtocart(item:any){
    this.cartService.addtoCart(item);
    }
}
