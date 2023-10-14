import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Sale } from "../../shared/models/sale.model";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SaleService {

    apiPath = environment.apiPath;

    public sales: BehaviorSubject<Sale[]> = new BehaviorSubject<Sale[]>(null);

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    public getSale(id): Observable<Sale> {
        const url = this.apiPath + `/sale/${id}`;
        return this.http.get<Sale>(url);
    }

    public getSales() {
        const url = this.apiPath + `/sale`;
        return this.http.get<Sale[]>(url)
            .subscribe(
                sales => this.sales.next(sales),
                err => console.log(err)
            );
    }

    public addNewSale(sale: Sale) {
        const url = this.apiPath + `/sale`;
        this.http.post(url, sale)
            .subscribe(
                res => {
                    // this.router.navigateByUrl('/home');
                    this.getSales();
                },
                err => console.log(err)
            );
    }

    public updateSale(saleId: Number, sale: Sale) {

        const url = this.apiPath + `/sale/${saleId}`;

        this.http.put(url, sale)
            .subscribe(
                res => {
                    this.getSales();
                    // this.router.navigateByUrl('/home');
                },
                err => console.log(err)
            );
    }

    public deleteSale(saleId: Number) {
        const url = this.apiPath + `/sale/${saleId}`;
        this.http.delete(url)
            .subscribe(
                res => {
                    this.getSales();
                },
                err => console.log(err)
            );
    }

}