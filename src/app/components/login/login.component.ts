import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogin: boolean = false;
  formGroup!: FormGroup;
  constructor(private authService:AuthServiceService, private user: UserService,private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.isUserLogin();
  }
  initForm(){
    this.formGroup=new FormGroup({
      email_id: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required]),
    });
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          this.user.setDataInLocalStorage('userData', JSON.stringify(result.data));  
          this.user.setDataInLocalStorage('token', result.token);
          this.router.navigate(['/']);
          alert(result.message);
        }else{
          alert(result.message);
        }
      });

    }
  }

  isUserLogin(){
    if(this.user.getUserDetails() != null){
        this.isLogin = true;
    }
  }

}
