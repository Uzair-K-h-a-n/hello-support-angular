import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerService } from "../../core/services/customer.service";
import { AddEditCustomerComponent } from "./add-edit-customer/add-edit-customer.component";
@Component({
  selector: "app-customer",
  template: `<app-dynamic-table
    [title]="'Customers'"
    [rows]="rows"
    [columns]="columns"
    [actions]="actions"
    (onAction)="onAction($event)"
  ></app-dynamic-table>`,
})
export class CustomerComponent implements OnInit {
  rows = [];
  columns = [];
  actions = ["edit"];

  constructor(
    private modalService: NgbModal,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.setCustomerColumns();
    this.customerService.getCustomers();
    this.customerService.customers.subscribe(
      (customers) => (this.rows = customers),
      (err) => console.log(err)
    );
  }

  onAction(event) {
    switch (event["action"]) {
      case "add":
        this.openAddEditCustomer("Add");
        break;
      case "edit":
        this.openAddEditCustomer("Update", event["data"]);
        break;
      case "delete":
        this.deleteCustomers(event["data"].id);
        break;
      default:
        console.error("Unknown Action " + event["action"]);
    }
  }

  openAddEditCustomer(type, customer = null) {
    const modalRef = this.modalService.open(AddEditCustomerComponent, {
      size: "lg",
      centered: true,
      ariaLabelledBy: "add-customer",
    });
    modalRef.componentInstance.product = customer;
    modalRef.componentInstance.type = type;
    modalRef.result.then(
      (result) => {
        if (result === "success") {
        }
      },
      (reason) => {}
    );
  }

  deleteCustomers(row) {
    this.customerService.deleteCustomer(row.id);
  }

  setCustomerColumns() {
    this.columns = [
      { prop: "first_name", name: "First name" },
      { prop: "last_name", name: "Last name" },
      { prop: "email", name: "Email" },
      { prop: "phone", name: "Phone" },
      { prop: "active", name: "Active" },
    ];
  }
}
