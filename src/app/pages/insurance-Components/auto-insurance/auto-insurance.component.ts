import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductCategoryService } from "../../../core/services/product-category.service";
import { InsuranceService } from "../../../core/services/insurance.service";

@Component({
  selector: 'app-auto-insurance',
  templateUrl: './auto-insurance.component.html',
  styleUrls: ['./auto-insurance.component.scss']
})
export class AutoInsuranceComponent implements OnInit {

  autoInsuranceForm: FormGroup;
  focus = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: InsuranceService,
    private productCategoryService: ProductCategoryService
  ) {}

  ngOnInit(): void {
    this.createForm();
    // this.getProductCatagories();
  }

  createForm() {
    this.autoInsuranceForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age:['',Validators.required],
      phone: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      callTime: ['', Validators.required],
      vehicleMakeModelYear: ['', Validators.required],

    });
  }

  addData() {
    this.productService.addAutoInsuranceForm(this.autoInsuranceForm.value).subscribe(
      (res) => {
      },
      (err) => console.log(err)
    );
  }
}

