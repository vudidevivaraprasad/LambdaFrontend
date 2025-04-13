import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Interfaces/AuthInterface';
import AuthDetailsStoreService from 'src/app/ReduxStore/Auth/AuthDetails.service';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service';
import { SetLoading,LoginUser } from 'src/app/ReduxStore/Store';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loading:LoadingDetailsStoreService,private user:AuthDetailsStoreService,private api:ApiService,private route:Router){}

  userdetails:Login = {} as Login;
  message:string = ''

  submit(){
    this.message = ''
    this.loading.dispatch(SetLoading({isLoading:true}))
    this.api.Login(this.userdetails)
      .subscribe(data => {
        if(data.message === 'login successful'){
          this.message = data.message
          this.api.AuthVerification()
            .subscribe(data => {
              data.message === 'admin' && this.user.dispatch(LoginUser({isLogin:true,isAdmin:true}))
              data.message === 'regular' && this.user.dispatch(LoginUser({isLogin:true,isAdmin:false}))
              this.route.navigate(["/home"])
              this.loading.dispatch(SetLoading({isLoading:false}))
            },err => {
              this.message=err.message
              this.loading.dispatch(SetLoading({isLoading:false}))
            })
        }
        else{
          this.loading.dispatch(SetLoading({isLoading:false}))
          this.message = data.message
        }

      },err => {
        this.message = err.message
        this.loading.dispatch(SetLoading({isLoading:false}))
      })
  }

}
