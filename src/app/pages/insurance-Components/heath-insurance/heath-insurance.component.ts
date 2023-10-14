import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductCategoryService } from "../../../core/services/product-category.service";
import { InsuranceService } from "../../../core/services/insurance.service";


@Component({
  selector: 'app-heath-insurance',
  templateUrl: './heath-insurance.component.html',
  styleUrls: ['./heath-insurance.component.scss']
})
export class HeathInsuranceComponent implements OnInit {

  healthInsuranceForm: FormGroup;
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
    this.healthInsuranceForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age:['',Validators.required],
      phone: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      callTime: ['', Validators.required],
      coverageAmount:['', Validators.required]

    });
  }

  addData() {
    this.productService.addHealthInsurance(this.healthInsuranceForm.value).subscribe(
      (res) => {
      },
      (err) => console.log(err)
    );
  }
}

