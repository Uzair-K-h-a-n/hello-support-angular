import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
})
export class AddEditUserComponent implements OnInit {

  @Input() type;
  @Input() user;
  userForm: FormGroup;
  items=[
    {label:"Affordable Medicare Plans",value:"affordable-medicare"},
    {label:"Auto Insurance",value:"auto-insurance"},
    {label:"Health Insurance",value:"health-insurance"},
    {label:"Life Insurance",value:"life-insurance"}]

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userService: UserService
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
      email: ['', Validators.required],
      password: ['', Validators.required],
      pages: this.formBuilder.array([])

    });
    this.items.forEach(item => {
      const control = this.formBuilder.group({
        item: [item.value], // Set default item value
        checkbox: [false], // Set default checkbox value
      });
      this.forms.push(control);
    });
    debugger
    if (this.user) {
      let userObj=this.user;
      delete userObj.password
      this.userForm.patchValue({...userObj});
      const formArray = this.userForm.get('pages') as FormArray;
      debugger
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
    debugger
    console.log((this.userForm.get('pages').value));
    debugger
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
      request = this.userService.updateUser({...reqObj,pages});
    } else {
      let reqObj=this.userForm.value;
      delete reqObj._id
      request = this.userService.addNewUser({...reqObj,pages})
    }
    request.subscribe(
      resp => {
        this.userService.getUsers();
        this.activeModal.close("closed");
    },err=> console.log(err))
  }

  close() {
    this.activeModal.close("closed")
  }
  get forms() {
    return this.userForm.get('pages') as FormArray;
  }

}
