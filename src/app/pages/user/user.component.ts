import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../../core/services/user.service";
import { AddEditUserComponent } from "./add-edit-user/add-edit-user.component";

@Component({
  selector: "app-user",
  template: `
  <app-dynamic-table
    [title]="'Users'"
    [rows]="rows"
    [columns]="columns"
    [actions]="actions"
    (onAction)="onAction($event)"
  ></app-dynamic-table>`,
})
export class UserComponent implements OnInit {
  rows = [];
  columns = [];
  actions = ["edit"];

  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.setUserColumns();
    this.userService.getUsers();
    this.userService.users.subscribe(
      (users) => {
        debugger
        this.rows = users
      },
      (err) => console.log(err)
    );
  }

  onAction(event) {
    debugger
    switch (event["action"]) {
      case "add":
        this.openAddEditUser("Add");
        break;
      case "edit":
        this.openAddEditUser("Update", event["data"]);
        break;
      case "delete":
        this.deleteUsers(event["data"].id);
        break;
      default:
        console.log("Unknown Action " + event["action"]);
    }
  }

  openAddEditUser(type, user = null) {
    const modalRef = this.modalService.open(AddEditUserComponent, {
      size: "lg",
      centered: true,
      ariaLabelledBy: "add-user",
    });
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.type = type;
    modalRef.result.then(
      (result) => {
        if (result === "success") {
        }
      },
      (reason) => {}
    );
  }

  deleteUsers(row) {
    this.userService.deleteUser(row.id);
  }

  setUserColumns() {
    this.columns = [
      { prop: "first_name", name: "First name" },
      { prop: "last_name", name: "Last name" },
      { prop: "role", name: "Role" },
      { prop: "email", name: "Email" },
    ];
  }
}
