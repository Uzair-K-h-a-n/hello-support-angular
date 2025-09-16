import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductCategoryService } from "../../../core/services/product-category.service";
import { InsuranceService } from "../../../core/services/insurance.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-continuous-glucose-monitoring',
  templateUrl: './continuous-glucose-monitoring.component.html',
})
export class ContinuousGlucoseMonitoringComponent implements OnInit {

  glucoseonitoringForm: FormGroup;
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
    this.glucoseonitoringForm = this.formBuilder.group({
      name: ['', Validators.required],
      age:['',Validators.required],
      haveDiabetes:['',Validators.required],
      phone: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      zipCode: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      callTime: ['', Validators.required],
    });
  }

  addData() {
    this.glucoseonitoringForm.markAllAsTouched();
    if(!this.glucoseonitoringForm.valid){
      return
    }
    this.loader=true;
    this.productService.addContinuousGlucoseMonitoringForm(this.glucoseonitoringForm.value).subscribe(
      (res) => {
        this.glucoseonitoringForm.reset();
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

