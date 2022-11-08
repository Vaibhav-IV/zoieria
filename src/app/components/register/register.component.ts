import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormGroup!: FormGroup;
  constructor(private authService:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.registerinitForm();

  }

  registerinitForm(){
    this.registerFormGroup=new FormGroup({
      first_name: new FormControl("",[Validators.required]),
      last_name: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      contact_number: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required]),
      email_id: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required]),
    });
  }

  registerProcess(){
    if(this.registerFormGroup.valid){
      this.authService.register(this.registerFormGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          this.router.navigate(['user/login']);
          alert(result.message);
        }else{
          alert(result.message);
        }
      });

    }
  }

}