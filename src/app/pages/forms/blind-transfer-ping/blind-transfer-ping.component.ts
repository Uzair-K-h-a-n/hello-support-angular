import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormService } from "../../../core/services/forms.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-blind-transfer-ping',
  templateUrl: './blind-transfer-ping.component.html',
})
export class BlindTransferPingComponent implements OnInit {

  blindTransferPingForm: FormGroup;
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
    this.blindTransferPingForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
    });
  }

  submitForm() {
    this.blindTransferPingForm.markAllAsTouched();
    if(!this.blindTransferPingForm.valid){
      return
    }
    this.loader=true;
    this.formService.blindTransferPingForm(this.blindTransferPingForm.value).subscribe(
      (res:any) => {
        this.blindTransferPingForm.reset();
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