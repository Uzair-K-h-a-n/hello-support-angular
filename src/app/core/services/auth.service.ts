import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { UserBody } from "../../shared/models/user.model";
import { environment } from "../../../environments/environment";
import { AuthResponseData } from "../../shared/models/auth.model";
import { Company } from "../../shared/models/company.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {

  private apiPath: string = environment.companyApiPath;
  // private apiPath: string = environment.apiPath;

  constructor(private http: HttpClient, private router: Router) { }

  public registerCompany(data: Company) {
    return this.http.post<any>(this.apiPath + '/auth/register', data);
  }

  public login(body: UserBody) {
    this.http.post<AuthResponseData>(this.apiPath + '/user/login', body)
      .subscribe(resp => {
        this.saveToken(resp.token);
        this.router.navigateByUrl("/dashboards/dashboard");
      },err => console.log(err));
  }

  public logout() {
    this.clearToken();
    this.router.navigateByUrl("/auth/login");
  }

  public getToken() {
    try {
      return localStorage.getItem("a-token");
    }
    catch (ex) {
      console.log(ex);
    }
  }

  public saveToken(token) {
    localStorage.setItem("a-token", token);
  }

  public clearToken() {
    localStorage.removeItem("a-token");
  }

}
