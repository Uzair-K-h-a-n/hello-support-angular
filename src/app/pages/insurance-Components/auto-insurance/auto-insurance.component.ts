import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductCategoryService } from "../../../core/services/product-category.service";
import { InsuranceService } from "../../../core/services/insurance.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-auto-insurance',
  templateUrl: './auto-insurance.component.html',
  styleUrls: ['./auto-insurance.component.scss']
})
export class AutoInsuranceComponent implements OnInit {

  autoInsuranceForm: FormGroup;
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
    this.autoInsuranceForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age:['',Validators.required],
      phone: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      zipCode: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      state: ['', Validators.required],
      callTime: ['', Validators.required],
      vehicleMakeModelYear: ['', Validators.required],

    });
  }

  addData() {
    this.autoInsuranceForm.markAllAsTouched();
    if(!this.autoInsuranceForm.valid){
      return
    }
    this.loader=true;
    this.productService.addAutoInsuranceForm(this.autoInsuranceForm.value).subscribe(
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

