import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/environment/environment';
import { Product, User } from 'src/app/Interfaces/AuthInterface';
import AuthDetailsStoreService from 'src/app/ReduxStore/Auth/AuthDetails.service';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service'
import ProductsDetailsStoreService from 'src/app/ReduxStore/Products/ProductDetails.service';
import {AddProduct, SetLoading,Store} from 'src/app/ReduxStore/Store'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  store = Store;
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

  // products:Product[] = [
  //     {
  //       "image": "1744799238033.jpg",
  //       "createdAt": 1744799239931,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "7e9bcce4-22a9-4b37-be80-116f98c61fc8",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799239931
  //     },
  //     {
  //       "image": "1744799270847.jpg",
  //       "createdAt": 1744799272595,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "cd6e4b89-ebb4-4050-8e2f-5e3d2f8eb609",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799272595
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c4275f8db832",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-46",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a3",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c4",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c42",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c427",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c4275",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c4275f",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c4275f8",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c4275f8d",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c4275f8db",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c4275f8db8",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //     {
  //       "image": "1744799302261.jpg",
  //       "createdAt": 1744799304020,
  //       "price": 100,
  //       "description": "just bulb",
  //       "id": "d14f24fa-b537-461a-a36b-c4275f8db83",
  //       "title": "dev-weather-app",
  //       "category": "Grocery",
  //       "subcategory": "bulb",
  //       "updatedAt": 1744799304020
  //     },
  //   ]

  products:Product[] = []

  constructor(private http:HttpClient,private authdetails:AuthDetailsStoreService,private loading:LoadingDetailsStoreService,private env:Environment,private product:ProductsDetailsStoreService){}

  ngOnInit(): void {
    this.product.state$.subscribe(data => this.products = data.result)
    // this.products.map(product => this.store.dispatch(AddProduct(product)))
    this.isAuth$ = this.authdetails.state$
    this.isAuth$.subscribe(user => {
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
