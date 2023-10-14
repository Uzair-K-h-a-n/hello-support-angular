import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  items=["Affordable Medicare Plans","Auto Insurance","Health Insurance","Life Insurance"]
  selectedItems=["hello"]

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { this.createUserForm();}

  ngOnInit(): void {
    
  }

  private createUserForm() {
    this.userForm = this.formBuilder.group({
      _id: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      role:['',Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      forms: this.formBuilder.array(this.getFormsArray())

    });
    if (this.user) {
      let userObj=this.user;
      delete userObj.password
      this.userForm.patchValue(userObj);
    }
  }
  getFormsArray(){
    return this.items.map(item=>{
      return this.formBuilder.control(item)
    }) 
  }

  addUpdateUser() {
    let request;
    if (this.type == "Update") {
      let reqObj=this.userForm.value;
      if(!this.userForm.value['password']){
        reqObj['password']=this.user["password"];
      }
      request = this.userService.updateUser(reqObj);
    } else {
      request = this.userService.addNewUser(this.userForm.value)
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

}
