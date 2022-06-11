import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../iproduct';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url!: string;
  constructor(private http:HttpClient) { }

  
  getData():Observable<IProduct[]>{

    let url="http://localhost:3000/Products"

    return this.http.get<IProduct[]>(url);
    
  }

  getSingleProduct(productId : number): Observable<IProduct> {
    return this.http.get<IProduct>(this.url + 'products/' + productId);
    }
  
    getProductsFromCategory(title: String): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.url + 'products/category/' + title);
    }  
}

