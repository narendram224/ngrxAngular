import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/model/user.mode';
import { Store } from '@ngrx/store';
import { login } from 'src/app/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   form:FormGroup = new FormGroup({
    email: new FormControl(''),
    password:new FormControl('')
  });
  constructor(private auth:AuthService,private store:Store<User>) { }

  ngOnInit() {
  }

  login(){
      const value:User =this.form.value;
      console.log(value);
        
      this.auth.login(value)
      .subscribe((res)=>{
          console.log(res);
          this.store.dispatch(login(res));
          console.log("succesfully login");
          
      },(err)=>{
          console.log("erro",err);
          
      })
  }


}
