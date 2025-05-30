import { Component, OnDestroy } from '@angular/core';
import { Register } from 'src/app/Interfaces/AuthInterface';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service';
import { SetLoading } from 'src/app/ReduxStore/Store';
import { ApiService } from 'src/app/services/api.service';
import emailjs from '@emailjs/browser'
import { MailService } from 'src/app/services/mail.service';
import { Environment } from 'src/app/environment/environment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {

  userdetails:Register={} as Register
  message:string = ''
  url:string = this.env.Main

  private destroy$ = new Subject<void>();

  constructor(private loading:LoadingDetailsStoreService,private api:ApiService,private mail:MailService,private env:Environment){}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.loading.dispatch(SetLoading({isLoading:false}))
  }


  submit(){
    this.message = ''
    this.loading.dispatch(SetLoading({isLoading:true}))
    this.api.Register({mail:this.userdetails.mail.toLowerCase(),password:this.userdetails.password}).pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if(data.message === 'user registered'){
          this.mail.Verification(this.userdetails.mail,`${this.url}/verification?token=${data.token}`)
            .then(data => {
              console.log("mail data",data)
              this.message = data.text
            }).catch(err => console.log(err))
        }
        else
          this.message = data.message
        this.loading.dispatch(SetLoading({isLoading:false}))
      },err => {
        this.message = err.message
        this.loading.dispatch(SetLoading({isLoading:false}))
      })
  }

}
