import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../core/services/auth.service"

@Component({
  selector: "app-products",
  templateUrl:'./form-list.component.html',
})
export class FormsComponent implements OnInit {
  rows = [];
  templates=[{name:"Medicare Plans",link:"/affordable-medicare",formName:"affordable-medicare"},
  {name:"Auto Insurance",link:`/auto-insurance`,formName:"auto-insurance"},
  {name:"Health Insurance",link:`/health-insurance`,formName:"health-insurance"},
  {name:"Life Insurance",link:`/life-insurance`,formName:"life-insurance"},
  {name:"MVA Compensation",link:`/mva-compensation`,formName:"mva-compensation"},
  {name:"Continuous Glucose Monitoring",link:`/continuous-glucose-monitoring`,formName:"continuous-glucose-monitoring"},
  {name:"Debt SettlementSolution",link:`/debt-settlementsolution`,formName:"debt-settlementsolution"}]

  columns = [];
  actions = [];
  activeRow: any;

  constructor(private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.setProductColumns();
    this.getTemplateList();
    
  }
  getTemplateList(){
    this. rows = []
    const userTemplates=this.authService.getTemplates()
    this.templates.forEach(temp=>{
      if(userTemplates.includes(temp.formName)){
        this.rows.push(temp)
      }

    })
  }

  setProductColumns() {
    this.columns = [
      { prop: "name", name: "Name" },
      { prop: "link", name: "Link" }
    ];
  }
  onActivate(event) {
    this.activeRow = event.row;
  }
  filterTable($event){
    let val = $event.target.value;
    if(!val){
      this.getTemplateList();
      return
    }
    let temp=this.rows;
    this.rows = temp.filter(function(d) {
      for (var key in d) {
        try {
          if (d[key].toLowerCase().indexOf(val) !== -1) {
            return true;
          }
        } catch (err){
          
        }
      }
      return false;
    });
  }
}
