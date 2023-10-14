import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class InsuranceService {

    apiPath = environment.companyApiPath;

    public insuranceDatas: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    constructor(
        private http: HttpClient,
    ) { }
    public addAutoInsuranceForm(insuranceData) {
        const url = this.apiPath + `/insurance/auto-insurance`;
        return this.http.post(url, insuranceData);
    }
    public addAffordableMedicare(insuranceData) {
        const url = this.apiPath + `/insurance/affordable-medicare-plans`;
        return this.http.post(url, insuranceData);
    }
    public addHealthInsurance(insuranceData) {
        const url = this.apiPath + `/insurance/health-insurance`;
        return this.http.post(url, insuranceData);
    }
    public addLifeInsurance(insuranceData) {
        const url = this.apiPath + `/insurance/life-insurance`;
        return this.http.post(url, insuranceData);
    }
}
