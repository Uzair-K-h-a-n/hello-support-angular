import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-navbar",
  templateUrl: "./landing-navbar.component.html",
})
export class LandingNavbarComponent {
  isCollapsed = true;
  @Input() showAuth = true;
}
