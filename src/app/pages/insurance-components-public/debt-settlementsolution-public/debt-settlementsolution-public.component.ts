import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductCategoryService } from "../../../core/services/product-category.service";
import { InsuranceService } from "../../../core/services/insurance.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'debt-settlementsolution-public',
  templateUrl: './debt-settlementsolution-public.component.html',
  styleUrls: ['./debt-settlementsolution-public.component.scss']
})
export class DebtSettlementSolutionPublicComponent implements OnInit {

   debtSettlementSolutionForm: FormGroup;
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
    this. debtSettlementSolutionForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      state: ['', Validators.required],
      zipCode: ['', Validators.compose([ Validators.required, Validators.pattern(/^[0-9+*/-]*$/)])],
      debt:['',Validators.required],
      callTime: ['', Validators.required],
      

    });
  }

  addData() {
    this. debtSettlementSolutionForm.markAllAsTouched();
    if(!this. debtSettlementSolutionForm.valid){
      return
    }
    this.loader=true;
    this.productService.addDebtSettlementSolutionPublic(this. debtSettlementSolutionForm.value).subscribe(
      (res) => {
        this. debtSettlementSolutionForm.reset();
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
