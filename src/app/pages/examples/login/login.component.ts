import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  email;
  password;

  constructor(private authService: AuthService) {}

  ngOnInit() { }
  
  login(email, password) {
    this.authService.login({ email: email.value, password: password.value });
  }
}
