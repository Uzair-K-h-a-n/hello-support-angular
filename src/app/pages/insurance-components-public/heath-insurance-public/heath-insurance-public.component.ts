import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductCategoryService } from "../../../core/services/product-category.service";
import { InsuranceService } from "../../../core/services/insurance.service";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-heath-insurance-public',
  templateUrl: './heath-insurance-public.component.html',
  styleUrls: ['./heath-insurance-public.component.scss']
})
export class HeathInsurancePublicComponent implements OnInit {

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
    this.productService.addHealthInsurancePublic(this.healthInsuranceForm.value).subscribe(
      (res) => {
        this.healthInsuranceForm.reset();
        this.loader=false;
        this.toastr.success("Form successfully submitted", 'Success', {
          timeOut: 2000, // Display duration in milliseconds
        });
      },
          (err) => {
        console.log(err)
        this.loader = false;
        this.toastr.error(err.error.Message, "Error", {
          timeOut: 2000, // Display duration in milliseconds
        });
      }
    );
  }
}

