import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../../core/services/customer.service';
@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
})
export class AddEditCustomerComponent implements OnInit {

  @Input() customer;
  @Input() type;
  customerForm: FormGroup;

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.createCustomerForm();
  }

  private createCustomerForm() {
    this.customerForm = this.formBuilder.group({
      id: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      whatsapp: ['', Validators.required],
      address_1: ['', Validators.required],
      address_2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', Validators.required],
      active: ['', Validators.required],
    });

    if (this.customer) {
      this.customerForm.patchValue(this.customer);
    }
  }

  addUpdateCustomer() {
    let request;
    if (this.type == "Update") {
      request = this.customerService.updateCustomer(this.customerForm.value);
    } else {
      request = this.customerService.addNewCustomer(this.customerForm.value)
    }
    request.subscribe(
      resp => {
        this.customerService.getCustomers();
        this.activeModal.close("closed");
    },err=> console.log(err))
  }

  close() {
    this.activeModal.close("closed")
  }

}
