import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductCategoryService } from "../../../core/services/product-category.service";
import { InsuranceService } from "../../../core/services/insurance.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'medicare-cms-public',
  templateUrl: './medicare-cms-public.component.html',
  styleUrls: ['./medicare-cms-public.component.scss']
})
export class MedicareCmsPublicComponent implements OnInit {

  medicareCmsForm: FormGroup;
  focus = false;
  loader = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: InsuranceService,
    private productCategoryService: ProductCategoryService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.medicareCmsForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      street_address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      dob: ['', Validators.compose([Validators.required, this.dobValidator.bind(this)])],
      age: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]*$/), this.ageValidator.bind(this)])],
    });
  }

  dobValidator(control: any) {
    const dob = control.value;
    if (!dob) {
      return null;
    }
    const selectedDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDate.getDate())) {
      age--;
    }
    if (isNaN(age) || age < 18) {
      return { dobMinimum: true };
    }
    return null;
  }

  ageValidator(control: any) {
    const age = control.value;
    if (!age) {
      return null;
    }
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 18) {
      return { ageMinimum: true };
    }
    return null;
  }

  addData() {
    this.medicareCmsForm.markAllAsTouched();
    if (!this.medicareCmsForm.valid) {
      return
    }
    this.loader = true;
    this.productService.addMedicareCmsPublic(this.medicareCmsForm.value).subscribe(
      (res) => {
        this.medicareCmsForm.reset();
        this.loader = false;
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
