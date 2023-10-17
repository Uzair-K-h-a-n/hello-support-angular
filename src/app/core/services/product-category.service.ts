import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProductCategoryService {

    apiPath = environment.apiPath;

    public productCatagories: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    constructor(
        private http: HttpClient,
    ) { }

    public getProductCategory(id): Observable<any> {
        const url = this.apiPath + `/product_category/${id}`;
        return this.http.get<any>(url);
    }

    public getProductCatagories() {
        const url = this.apiPath + `/product_category`;
        return this.http.get(url)
            .subscribe(
                productCat => this.productCatagories.next(productCat['data']),
                err => console.log(err)
            );
    }

    public addNewProductCategory(productCategory) {
        const url = this.apiPath + `/product_category`;
        return this.http.post(url, productCategory);
    }

    public updateProductCategory(productCategory) {
        const url = this.apiPath + `/product_category`;
        return this.http.put(url, productCategory);
    }

    public deleteProductCategory(productCategoryId: Number) {
        const url = this.apiPath + `/product_category/${productCategoryId}`;
        this.http.delete(url)
            .subscribe(
                res => this.getProductCatagories(),
                err => console.log(err)
            );
    }

}