import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FormService {

    apiPath = environment.apiPath;

    constructor(
        private http: HttpClient,
    ) { }

    public blindTransferPingForm(data) {
        const url = this.apiPath + `/forms/blind-transfer-ping`;
        return this.http.post(url, data);
    }

    public p6MedTrbRevForm(data) {
        const url = this.apiPath + `/forms/p6_med_trb_rev`;
        return this.http.post(url, data);
    }
}
