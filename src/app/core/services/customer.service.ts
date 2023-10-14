import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Customer } from "../../shared/models/customer.model";
@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    apiPath = environment.companyApiPath;

    public customers: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);

    constructor(
        private http: HttpClient,
    ) { }

    public getCustomer(id): Observable<Customer> {
        const url = this.apiPath + `/customer/${id}`;
        return this.http.get<Customer>(url);
    }

    public getCustomers() {
        const url = this.apiPath + `/customer`;
        return this.http.get(url)
            .subscribe(
                customers => this.customers.next(customers['data']),
                err => console.log(err)
            );
    }

    public addNewCustomer(customer: Customer) {
        const url = this.apiPath + `/customer`;
        return this.http.post(url, customer);
    }

    public updateCustomer(customer: Customer) {
        const url = this.apiPath + `/customer`;
        return this.http.put(url, customer);
    }

    public deleteCustomer(customerId: Number) {
        const url = this.apiPath + `/customer/${customerId}`;
        this.http.delete(url)
            .subscribe(
                res => this.getCustomers(),
                err => console.log(err)
            );
    }

}

let data = [
    {
        "id": 1,
        "firstName": "test",
        "lastName": "test",
        "email": "test",
        "phone": "test",
        "whatsapp": "test",
        "address1": "test",
        "address2": "test",
        "city": "test",
        "state": "test",
        "country": "test",
        "zipcode": 1,
        "active":1
    },
    {
        "id": 2,
        "firstName": "test",
        "lastName": "test",
        "email": "test",
        "phone": "test",
        "whatsapp": "test",
        "address1": "test",
        "address2": "test",
        "city": "test",
        "state": "test",
        "country": "test",
        "zipcode": 2,
        "active": 2
    },
    {
        "id": 3,
        "firstName": "test",
        "lastName": "test",
        "email": "test",
        "phone": "test",
        "whatsapp": "test",
        "address1": "test",
        "address2": "test",
        "city": "test",
        "state": "test",
        "country": "test",
        "zipcode": 3,
        "active": 3
    }
   
  ];