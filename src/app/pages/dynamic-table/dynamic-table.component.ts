import { Component, Input, OnInit, Output ,EventEmitter, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() title;
  @Input() headers;
  @Input()
  public get rows() {
    return this._rows;
  }
  public set rows(value) {
    debugger
    this._rows = value;
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
      };
    });
  }
  private _rows;

  @Input() columns;
  @Input() actions;
  @Output() onAction = new EventEmitter();
  @ViewChild('Actions', { static: true }) actionTemplate;
  activeRow: any;
  entries:any;
  focus1: any;
  temp = [];
  constructor() { 
    
  }

  ngOnInit(): void {
    if(this.actions.length>0){
      this.columns.push({ prop: 'Actions', cellTemplate: this.actionTemplate })
    }
  }
  
  performAction(data, action) {
    this.onAction.emit({ data, action });
  }
  onActivate(event) {
    this.activeRow = event.row;
  }
  entriesChange(event){

  }
  filterTable($event){
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
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
