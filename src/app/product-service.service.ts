import { Product } from './common/product';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8082/products';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.usersUrl);
  }

  public save(product: Product) {
    return this.http.post<Product>(this.usersUrl, product);
  }

  public delete(product:Product){
    return this.http.delete<Product>(this.usersUrl+'/'+product.id);

  }
  update(product:Product, value: any) {
   return this.http.put<Product>(this.usersUrl+'/'+product.id,value);
 }
 getProduct(product:Product){
  return this.http.get(this.usersUrl+'/'+product.id)
  }
  updateEmployee(id: number, value: any): Observable<object> {
    return this.http.put<Product>(this.usersUrl,value);
  }
  
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.usersUrl}/${id}`);
  }
}
