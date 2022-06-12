import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../iproduct';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  
  getData():Observable<IProduct[]>{

    let url="http://localhost:3000/Products"

    return this.http.get<IProduct[]>(url);
    
  }

  
}

