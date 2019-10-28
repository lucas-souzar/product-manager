import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../products/product/product';

const API = 'http://localhost:8080';

@Injectable({ providedIn: 'root' })
export class ProductService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {

        return this.http
            .get<Product[]>(API + '/' + userName + '/produtos');
    }
}