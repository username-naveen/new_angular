import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductType } from 'src/types';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getProduct() {
    const url = 'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
    return this.httpClient.get<ProductType[]>(url);
  }
}
