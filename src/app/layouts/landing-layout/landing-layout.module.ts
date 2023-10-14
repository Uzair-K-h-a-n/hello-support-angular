import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingNavbarComponent } from "./landing-navbar/landing-navbar.component";
import { RouterModule } from "@angular/router";
import { CollapseModule } from "ngx-bootstrap";
import { LandingFooterComponent } from "src/app/layouts/landing-layout/landing-footer/landing-footer.component";

const components = [LandingNavbarComponent, LandingFooterComponent];

@NgModule({
  imports: [CommonModule, RouterModule, CollapseModule.forRoot()],
  declarations: components,
  exports: components,
})
export class LandingLayoutModule {}
