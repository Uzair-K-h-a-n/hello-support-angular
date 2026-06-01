import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
})
export class AddEditUserComponent implements OnInit {

  @Input() type;
  @Input() user;
  userForm: FormGroup;
  loader=false;
  items=[
    {label:"Affordable Medicare Plans",value:"affordable-medicare"},
    {label:"Auto Insurance",value:"auto-insurance"},
    {label:"Health Insurance",value:"health-insurance"},
    {label:"Life Insurance",value:"life-insurance"},
    {label:"MVA Compensation",value:"mva-compensation"},
    {label:"Debt SettlementSolution",value:"debt-settlementsolution"},
    {label:"Medicare CMS",value:"medicare-cms"},
    {label:"Debt Settlement Solution",value:"debt-settlementsolution"},
    {label:"Continuous Glucose Monitoring",value:"continuous-glucose-monitoring"},
  ]

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private ref: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.createUserForm();
  }

  private createUserForm() {
    this.userForm = this.formBuilder.group({
      _id: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      role:['',Validators.required],
      email: [null, Validators.compose([Validators.email, Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+\\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$")])],
      password: [''],
      pages: this.formBuilder.array([])

    });
    this.items.forEach(item => {
      const control = this.formBuilder.group({
        item: [item.value], // Set default item value
        checkbox: [false], // Set default checkbox value
      });
      this.forms.push(control);
    });
    if (this.user) {
      let userObj=this.user;
      delete userObj.password
      this.userForm.patchValue({...userObj});
      const formArray = this.userForm.get('pages') as FormArray;
      this.user.pages.forEach((patch, index) => {
        if (formArray.at(index)) {
          formArray.at(index).patchValue({"item":patch,"checkbox":true});
        }
      });
    }
  }
  getFormsArray(){
    return this.items.map(item=>{
      return this.formBuilder.control(item)
    }) 
  }

  addUpdateUser() {
    let request;
    let msg
    this.userForm.markAllAsTouched();
    this.ref.detectChanges();
    if(!this.userForm.valid){
      return true
    }
    this.loader=true;
    console.log((this.userForm.get('pages').value));
    let pages=[];
    (this.userForm.get('pages').value).forEach((page=>{
      if(page.checkbox){
        return pages.push(page.item);
      }
    }));
    if (this.type == "Update") {
      let reqObj=this.userForm.value;
      if(!this.userForm.value['password']){
        reqObj['password']=this.user["password"];
      }
      msg="User Successfully Updated"
      request = this.userService.updateUser({...reqObj,pages})
    } else {
      let reqObj=this.userForm.value;
      delete reqObj._id
      msg="User Successfully Created"
      request = this.userService.addNewUser({...reqObj,pages})
    }
    request.subscribe(
      resp => {
        this.userService.getUsers();
        this.loader=false;
        this.showSnackBar(msg)
    },err=> {
      console.log(err)
      this.loader=false
    })
  }

  close() {
    this.activeModal.close("closed")
  }
  get forms() {
    return this.userForm.get('pages') as FormArray;
  }
  showSnackBar(message){
        this.toastr.success(message, 'Success', {
          closeButton: true,
          disableTimeOut: true
        });
    }

}
