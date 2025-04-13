import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/environment/environment';
import { User } from 'src/app/Interfaces/AuthInterface';
import AuthDetailsStoreService from 'src/app/ReduxStore/Auth/AuthDetails.service';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service'
import {SetLoading} from 'src/app/ReduxStore/Store'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login_data = {
    mail:'',
    password:''
  }
  register_data = {
    mail:'',
    password:''
  }
  res:any;
  isAuth$!:Observable<User>;
  isLogin!:boolean;
  isAdmin!:boolean;
  url = this.env.Api
  
  constructor(private http:HttpClient,private authdetails:AuthDetailsStoreService,private loading:LoadingDetailsStoreService,private env:Environment){
  }



  ngOnInit(): void {
    this.isAuth$ = this.authdetails.state$
    this.isAuth$.subscribe(user => {
      console.log('Updated user state in home:', user);
      this.isAdmin=user.isAdmin
      this.isLogin=user.isLogin
    });
  }
  submit(){
    this.loading.dispatch(SetLoading({isLoading:true}))
    console.log(this.login_data)
    this.http.post(`${this.url}/login`,this.login_data,{ withCredentials: true })
    .subscribe(data=>{
      this.res = data
      this.loading.dispatch(SetLoading({isLoading:false}))
    },err=>console.log(err))
  }
  submit2(){
    this.http.post(`${this.url}/register`,this.register_data)
      .subscribe(data => {
        this.res=data
      },err => console.log(err))
  }
  verification(value:string){
    this.http.get(`${this.url}/verification?token=${value}`)
      .subscribe(data => {
        this.res=data
      },err => console.log(err))
  }
  GetAllUSers(){
    this.http.get(`${this.url}/users`,{ withCredentials: true })
      .subscribe(data => {
      },err => console.log(err))
  }
  GetAllUserDetails(){
    this.http.get(`${this.url}/usersdetails`,{ withCredentials: true })
      .subscribe(data => {
      },err => console.log(err))
  }
  getProducts(){
    this.http.get(`${this.url}/products`,{withCredentials:true})
    .subscribe(data => {
    },err => console.log(err))
  }
  logout(){
    this.http.get(`${this.url}/logout`,{ withCredentials: true })
      .subscribe(data => {
      },err => console.log(err))
  }
  AddToCart(v:string){
    this.http.post(`${this.url}/cart`,{productid:v,task:'ADD'},{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }
  RemoveFromCart(v:string){
    this.http.post(`${this.url}/cart`,{productid:v,task:'REMOVE'},{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }
  GetCart(){
    this.http.get(`${this.url}/cart`,{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }


  AddToWishlist(v:string){
    this.http.post(`${this.url}/wishlist`,{productid:v,task:'ADD'},{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }
  RemoveFromWishlist(v:string){
    this.http.post(`${this.url}/wishlist`,{productid:v,task:'REMOVE'},{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }
  GetWishlist(){
    this.http.get(`${this.url}/wishlist`,{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }


  AddToOrders(v:string){
    this.http.post(`${this.url}/orders`,{orderid:v},{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }
  GetOrders(){
    this.http.get(`${this.url}/orders`,{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }

  AddToAddress(name:string,mobile:string,pincode2:string,state:string,city:string,village:string,area:string){
    const mobilenumber = parseInt(mobile)
    const pincode = parseInt(pincode2)
    this.http.post(`${this.url}/address`,{name,mobilenumber,pincode,state,city,village,area,task:'ADD'},{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }
  RemoveFromAddress(id2:string){
    const id = parseInt(id2)
    this.http.post(`${this.url}/address`,{id,task:'REMOVE'},{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }
  GetAddress(){
    this.http.get(`${this.url}/address`,{ withCredentials: true})
    .subscribe(data => {
    },err => console.log(err))
  }
}
