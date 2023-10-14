import { Routes } from "@angular/router";

import { LoginComponent } from "../../pages/examples/login/login.component";
// import { PricingComponent } from "../../pages/examples/pricing/pricing.component";
// import { LockComponent } from "../../pages/examples/lock/lock.component";
// import { RegisterComponent } from "../../pages/examples/register/register.component";

export const AuthLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
];
