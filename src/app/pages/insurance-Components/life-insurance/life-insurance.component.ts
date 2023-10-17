import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductCategoryService } from "../../../core/services/product-category.service";
import { InsuranceService } from "../../../core/services/insurance.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrls: ['./life-insurance.component.scss']
})
export class LifeInsuranceComponent implements OnInit {

  lifeInsuranceForm: FormGroup;
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
    this.lifeInsuranceForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age:['',Validators.required],
      phone: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      zipCode: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      state: ['', Validators.required],
      callTime: ['', Validators.required],
      coverageAmount:['', Validators.required]

    });
  }

  addData() {
    this.lifeInsuranceForm.markAllAsTouched();
    if(!this.lifeInsuranceForm.valid){
      return
    }
    this.loader=true;
    this.productService.addLifeInsurance(this.lifeInsuranceForm.value).subscribe(
      (res) => {
        this.loader=false;
        this.toastr.success("Form successfully submitted", 'Success', {
          timeOut: 2000, // Display duration in milliseconds
        });
      },
       (err) =>{
        this.loader=false; 
        console.log(err)
      }
    );
  }
}

