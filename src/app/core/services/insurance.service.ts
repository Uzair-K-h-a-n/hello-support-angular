import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class InsuranceService {

    apiPath = environment.apiPath;

    public insuranceDatas: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    constructor(
        private http: HttpClient,
    ) { }
    public addAutoInsuranceForm(insuranceData) {
        const url = this.apiPath + `/insurance/auto-insurance`;
        return this.http.post(url, insuranceData);
    }
     
    public addContinuousGlucoseMonitoringForm(insuranceData) {
        const url = this.apiPath + `/insurance/continuous-glucose-monitoring`;
        return this.http.post(url, insuranceData);
    }
    
    public addAffordableMedicare(insuranceData) {
        const url = this.apiPath + `/insurance/affordable-medicare-plans`;
        return this.http.post(url, insuranceData);
    }

    public addDebtSettlementSolution(debtData) {
        const url = this.apiPath + `/insurance/debt-settlementsolution`;
        return this.http.post(url, debtData);
    }
    public addHealthInsurance(insuranceData) {
        const url = this.apiPath + `/insurance/health-insurance`;
        return this.http.post(url, insuranceData);
    }
    public addLifeInsurance(insuranceData) {
        const url = this.apiPath + `/insurance/life-insurance`;
        return this.http.post(url, insuranceData);
    }
    public addMVACompensation(insuranceData) {
        const url = this.apiPath + `/insurance/mva-compensation`;
        return this.http.post(url, insuranceData);
    }
    public addAutoInsurancePublicForm(insuranceData) {
        const url = this.apiPath + `/insurance-public/auto-insurance-public`;
        return this.http.post(url, insuranceData);
    }
    public addAffordableMedicarePublic(insuranceData) {
        const url = this.apiPath + `/insurance-public/affordable-medicare-plans-public`;
        return this.http.post(url, insuranceData);
    }
    public addHealthInsurancePublic(insuranceData) {
        const url = this.apiPath + `/insurance-public/health-insurance-public`;
        return this.http.post(url, insuranceData);
    }
    public addLifeInsurancePublic(insuranceData) {
        const url = this.apiPath + `/insurance-public/life-insurance-public`;
        return this.http.post(url, insuranceData);
    }
    public addMVACompensationPublic(insuranceData) {
        const url = this.apiPath + `/insurance-public/mva-compensation-public`;
        return this.http.post(url, insuranceData);
    }
    public addDebtSettlementSolutionPublic(debtData) {
        const url = this.apiPath + `/insurance-public/debt-settlementsolution-public`;
        return this.http.post(url, debtData);
    }
    public addContinuousGlucoseMonitoringPublic(insuranceData) {
        const url = this.apiPath + `/insurance/continuous-glucose-monitoring-public`;
        return this.http.post(url, insuranceData);
    }
    public sendDataToCrmPublic(data) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Basic dXNlcjpwYXNz' });
        const url = `https://global-digital-media.trackdrive.com/api/v1/leads`;
        return this.http.post(url, data);
    }

    public checkIfDilarIsReady(number) {
        const url = this.apiPath + `/insurance-public/aca_cpl_agent_availability_check/${number}`;
        return this.http.get(url);
    }
}
