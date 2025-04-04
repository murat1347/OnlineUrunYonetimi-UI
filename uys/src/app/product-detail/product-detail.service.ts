import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  private http: HttpClient;
  private apiUrl = 'http://localhost:5193/api/Products';

  constructor(handler: HttpBackend) { 
    this.http = new HttpClient(handler);
  }
  
  getProductById(id: string) {
    return this.http.get<{ product: ProductResponse }>(`${this.apiUrl}/${id}`);
  }

}
export interface ProductResponse {
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  id: string;
}
