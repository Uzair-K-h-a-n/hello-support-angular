import { Routes } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";

export const ExamplesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "profile",
        component: ProfileComponent
      }
    ]
  }
];
