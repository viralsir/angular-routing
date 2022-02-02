import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string="";

   loginRef=new FormGroup({
     username:new FormControl(),
     password:new FormControl()
  })
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
     let login=this.loginRef.value;
     if(login.username=="vimal" && login.password=="123")
     {
        this.router.navigate(["dashboard",login.username])
     }
     else{
       this.msg="invalid username or password";
       this.loginRef.reset()
     }
  }


}
