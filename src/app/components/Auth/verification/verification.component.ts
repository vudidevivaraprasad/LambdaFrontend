import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service';
import { SetLoading } from 'src/app/ReduxStore/Store';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

    token:string | null = ''
    message:string = ''

    constructor(private route:ActivatedRoute,private api:ApiService,private loading:LoadingDetailsStoreService){}

    ngOnInit(): void {
      this.token = this.route.snapshot.queryParamMap.get('token')
      console.log('token',this.token)
      if(!this.token){
        this.message = "Unauthorized Access"
      }
      else{
        this.loading.dispatch(SetLoading({isLoading:true}))
        this.api.Verification(this.token)
          .subscribe(data => {
            this.loading.dispatch(SetLoading({isLoading:false}))
            this.message = data.message
          }
            ,err => {
              this.loading.dispatch(SetLoading({isLoading:false}))
              this.message = err.message
            }
          )
      }
    }
}
