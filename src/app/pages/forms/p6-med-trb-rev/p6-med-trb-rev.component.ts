import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormService } from "../../../core/services/forms.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'p6-med-trb-rev',
  templateUrl: './p6-med-trb-rev.component.html',
})
export class P6MedTrbRevComponent implements OnInit {

  p6MedTrbRevForm: FormGroup;
  focus = false;
  loader=false;
  responseMessage;
  showAlert = false;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.p6MedTrbRevForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  submitForm() {
    this.p6MedTrbRevForm.markAllAsTouched();
    if(!this.p6MedTrbRevForm.valid){
      return
    }
    this.loader=true;
    this.formService.p6MedTrbRevForm(this.p6MedTrbRevForm.value).subscribe(
      (res:any) => {
        this.p6MedTrbRevForm.reset();
        this.loader=false;
        this.responseMessage = res.message;
        this.showAlert = true;
      },
          (err) => {
        console.log(err)
        this.loader = false;
        this.responseMessage = err.error;
        this.showAlert = true;
      }
    );
  }

  closeAlert() {
    this.showAlert = false;
  }
}