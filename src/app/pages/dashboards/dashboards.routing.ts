import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AlternativeComponent } from "./alternative/alternative.component";

export const DashboardsRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    pathMatch: "full",
    children: [
      {
        path: "alternative",
        component: AlternativeComponent,
      },
    ],
  },
];
