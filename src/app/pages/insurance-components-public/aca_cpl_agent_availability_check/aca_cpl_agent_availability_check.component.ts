import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InsuranceService } from "../../../core/services/insurance.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-aca_cpl_agent_availability_check',
  templateUrl: './aca_cpl_agent_availability_check.component.html',
})
export class ACACPLAgentAvailabilityCheckComponent implements OnInit {

  availabilityChecForm: FormGroup;
  focus = false;
  loader = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: InsuranceService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.availabilityChecForm = this.formBuilder.group({
      phone: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
    });
  }

  submitForm() {
    this.availabilityChecForm.markAllAsTouched();
    if (!this.availabilityChecForm.valid) {
      return
    }
    this.loader = true;
    this.productService.checkIfDilarIsReady(this.availabilityChecForm.value.phone).subscribe(
      (res) => {
        this.loader = false;
        if (res['ready']) {
          this.availabilityChecForm.reset();
          this.toastr.success(undefined, 'Successful', {
            closeButton: true,
            disableTimeOut: true,
            enableHtml: false
          });
        } else {
          this.toastr.error(undefined, "Unsuccessful", {
            closeButton: true,
            disableTimeOut: true,
            enableHtml: false
          });
        }
      },
      (err) => {
        console.log(err)
        this.loader = false;
        this.toastr.error(err.error.Message, "Error", {
          closeButton: true,
          disableTimeOut: true
        });
      }
    );
  }
}