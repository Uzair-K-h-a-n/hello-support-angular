import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-products",
  templateUrl:'./form-list.component.html',
})
export class FormsComponent implements OnInit {
  rows = [
    {name:"Affordable Medicare Plans",link:"/affordable-medicare"},
    {name:"Auto Insurance",link:`/auto-insurance`},
    {name:"Health Insurance",link:`/ihealth-insurance`},
    {name:"Life Insurance",link:`/life-insurance`}];

  columns = [];
  actions = [];

  constructor(
  ) {}

  ngOnInit(): void {
    this.setProductColumns();
  }

  setProductColumns() {
    this.columns = [
      { prop: "name", name: "Name" },
      { prop: "link", name: "Link" }
    ];
  }
}
