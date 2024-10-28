import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InsuranceService } from "../../../core/services/insurance.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-mva-compensation',
  templateUrl: './mva-compensation.component.html',
  styleUrls: ['./mva-compensation.component.scss']
})
export class MVACompensationComponent implements OnInit {

  mvaCompensationForm: FormGroup;
  focus = false;
  loader=false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: InsuranceService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.mvaCompensationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      contactNumber: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      State: ['', Validators.required],
      zipCode: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      accidentYear: ['', Validators.required],
      attorney: ['', Validators.required],
      callTime: ['', Validators.required],
    });
  }

  addData() {
    this.mvaCompensationForm.markAllAsTouched();
    if(!this.mvaCompensationForm.valid){
      return
    }
    this.loader=true;
    this.productService.addMVACompensation(this.mvaCompensationForm.value).subscribe(
      (res) => {
        this.mvaCompensationForm.reset();
        this.loader=false;
        this.toastr.success("Form successfully submitted", 'Success', {
          closeButton: true,
          disableTimeOut: true
        });
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