import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductCategoryService } from "../../../core/services/product-category.service";
import { InsuranceService } from "../../../core/services/insurance.service";

@Component({
  selector: 'app-affordable-medicare-plans',
  templateUrl: './affordable-medicare-plans.component.html',
  styleUrls: ['./affordable-medicare-plans.component.scss']
})
export class AffordableMedicarePlansComponent implements OnInit {

  affordableMedicareForm: FormGroup;
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
    this.affordableMedicareForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age:['',Validators.required],
      phone: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      callTime: ['', Validators.required],

    });
  }

  addData() {
    this.productService.addAffordableMedicare(this.affordableMedicareForm.value).subscribe(
      (res) => {
      },
      (err) => console.log(err)
    );
  }
}

