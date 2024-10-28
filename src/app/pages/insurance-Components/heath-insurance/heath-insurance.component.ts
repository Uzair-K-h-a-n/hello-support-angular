import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductCategoryService } from "../../../core/services/product-category.service";
import { InsuranceService } from "../../../core/services/insurance.service";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-heath-insurance',
  templateUrl: './heath-insurance.component.html',
  styleUrls: ['./heath-insurance.component.scss']
})
export class HeathInsuranceComponent implements OnInit {

  healthInsuranceForm: FormGroup;
  focus = false;
  loader=false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: InsuranceService,
    private productCategoryService: ProductCategoryService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.createForm();
    // this.getProductCatagories();
  }

  createForm() {
    this.healthInsuranceForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age:['',Validators.required],
      dob:['',Validators.required],
      phone: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      zipCode: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      state: ['', Validators.required],
      callTime: ['', Validators.required],
      yearlyHouseholdIncome: ['', Validators.required]
     

    });
  }

  addData() {
    this.healthInsuranceForm.markAllAsTouched();
    if(!this.healthInsuranceForm.valid){
      return
    }
    this.loader=true;
    this.productService.addHealthInsurance(this.healthInsuranceForm.value).subscribe(
      (res) => {
        this.healthInsuranceForm.reset();
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

