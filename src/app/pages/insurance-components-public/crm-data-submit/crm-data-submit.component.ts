import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InsuranceService } from "../../../core/services/insurance.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-crm-data-submit',
  templateUrl: './crm-data-submit.component.html',
  styleUrls: ['./crm-data-submit.component.scss']
})
export class CrmDataSubmitComponent implements OnInit {

  crmDataForm: FormGroup;
  focus = false;
  loader = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: InsuranceService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.crmDataForm = this.formBuilder.group({
      lead_token: ['', Validators.required],
      caller_id: ['', Validators.required],
      traffic_source_id:['',Validators.required],
      first_name: ['',Validators.required],
      last_name:['',Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      trusted_form_cert_url: ['', Validators.required],
      jornaya_leadid: ['', Validators.required]
    });
  }

  addData() {
    debugger
    this.crmDataForm.markAllAsTouched();
    if(!this.crmDataForm.valid){
      return
    }
    this.loader=true;
    this.productService.sendDataToCrmPublic(this.crmDataForm.value).subscribe(
      (res) => {
        this.crmDataForm.reset();
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