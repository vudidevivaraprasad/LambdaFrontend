import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Environment } from 'src/app/environment/environment';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service';
import { SetLoading } from 'src/app/ReduxStore/Store';
import { ApiService } from 'src/app/services/api.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  mail:string = ''
  message:string = ''
  token:string | null = ''
  newPasswordView:boolean = false
  password:string = ''
  cpassword:string = ''

  constructor(private api:ApiService,private mailservice:MailService,private env:Environment,private route:ActivatedRoute,private loading:LoadingDetailsStoreService){}

  ngOnInit(): void {
    if(this.route.snapshot.queryParamMap.get('token')){
      this.loading.dispatch(SetLoading({isLoading:true}))
      this.token = this.route.snapshot.queryParamMap.get('token')
      this.api.AuthVerificationwithtoken(this.token)
      .subscribe(data => {
        if(data.message == 'admin' || data.message == 'regular'){
            this.newPasswordView = true
          }
        this.loading.dispatch(SetLoading({isLoading:false}))
        },err => this.loading.dispatch(SetLoading({isLoading:false})))
    }
  }

  ResetPassword(){
    this.api.ForgetPassword({token:this.token,newpassword:this.password})
              .subscribe(data => {
                console.log('data2',data)
                this.message = data.message
              })
  }

  submit(){
      if(this.mail){
        this.api.ForgetpasswordToken({mail:this.mail.toLowerCase()})
          .subscribe(data => {
            console.log('data',data)
            if(data?.message){
              console.log('inside message')
              this.message = data.message
            }
            else{
              this.token = 'We have send you a Mail with Reset Password Link'
              console.log('inside token')
              this.mailservice.ResetPassword(this.mail,`${this.env.Main}/forgetpassword?token=${data.token}`)
            }
          })
      }
  }
}
