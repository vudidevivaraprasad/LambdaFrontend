import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Address, AddressFromBackend, AllProducts, Auth, CartFromBackend, Checkout, ForgetPassword, ForgetPasswordResult, ForgetpasswordToken, ForgetpasswordTokenResult, Login, Message, OneProduct, Order, Orders, RegisterAuth, UserDetails, WishlistFromBackend } from '../Interfaces/AuthInterface';
import { Environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected url = this.env.Api

  constructor(private http:HttpClient,private env:Environment) { }

  //Auth
  AuthVerification():Observable<Auth>{
    return this.http.get<Auth>(`${this.url}/userverification`,{withCredentials:true})
  }
  AuthVerificationwithtoken(token:string | null):Observable<Auth>{
    return this.http.get<Auth>(`${this.url}/userverification?token=${token}`,{withCredentials:true})
  }
  Login(details:Login):Observable<Auth>{
    return this.http.post<Auth>(`${this.url}/login`,details,{withCredentials:true})
  }
  Logout():Observable<Auth>{
    return this.http.get<Auth>(`${this.url}/logout`,{ withCredentials:true })
  }
  Register(details:Login):Observable<RegisterAuth>{
    return this.http.post<RegisterAuth>(`${this.url}/register`,details,{withCredentials:true})
  }
  Verification(token:string | null):Observable<Message>{
    return this.http.get<Message>(`${this.url}/verification?token=${token}`)
  }
  ForgetpasswordToken(data:ForgetpasswordToken):Observable<ForgetpasswordTokenResult>{
    return this.http.post<ForgetpasswordTokenResult>(`${this.url}/forgetpassword`,data)
  }
  ForgetPassword(data:ForgetPassword):Observable<ForgetPasswordResult>{
    return this.http.post<ForgetPasswordResult>(`${this.url}/forgetpassword`,data)
  }


  //Products
  Products():Observable<AllProducts>{
    return this.http.get<AllProducts>(`${this.url}/products`)
  }
  Product(id:string):Observable<OneProduct>{
    return this.http.get<OneProduct>(`${this.url}/products/${id}`)
  }


  //UserDetails
  UserDetails():Observable<UserDetails>{
    return this.http.get<UserDetails>(`${this.url}/userdetails`,{ withCredentials:true })
  }


  //Cart
  AddToCart(id:string):Observable<Auth>{
    const data = {
      productid:id,
      task:'ADD'
    }
    return this.http.post<Auth>(`${this.url}/cart`,data,{ withCredentials:true })
  }
  RemoveFromCart(id:string):Observable<Auth>{
    const data = {
      productid:id,
      task:'REMOVE'
    }
    return this.http.post<Auth>(`${this.url}/cart`,data,{ withCredentials:true })
  }
  GetCart():Observable<CartFromBackend>{
    return this.http.get<CartFromBackend>(`${this.url}/cart`,{ withCredentials:true })
  }


  //Wishlist
  AddToWishlist(id:string):Observable<Auth>{
    const data = {
      productid:id,
      task:'ADD'
    }
    return this.http.post<Auth>(`${this.url}/wishlist`,data,{ withCredentials:true })
  }
  RemoveFromWishlist(id:string):Observable<Auth>{
    const data = {
      productid:id,
      task:'REMOVE'
    }
    return this.http.post<Auth>(`${this.url}/wishlist`,data,{ withCredentials:true })
  }
  GetWishlist():Observable<WishlistFromBackend>{
    return this.http.get<WishlistFromBackend>(`${this.url}/wishlist`,{ withCredentials:true })
  }


  //Address
  AddAddress(data:Address):Observable<Auth>{
    const temp = {
      ...data,
      task:'ADD'
    }
    return this.http.post<Auth>(`${this.url}/address`,temp,{ withCredentials:true })
  }
  RemoveAddress(id:number):Observable<Auth>{
    const data = {
      id,
      task:'REMOVE'
    }
    return this.http.post<Auth>(`${this.url}/address`,data,{ withCredentials:true })
  }
  GetAddress():Observable<AddressFromBackend>{
    return this.http.get<AddressFromBackend>(`${this.url}/address`,{ withCredentials:true })
  }

  //checkout
  Checkout(data:Checkout):Observable<Auth>{
    return this.http.post<Auth>(`${this.url}/orders`,data,{withCredentials:true})
  }
  Orders():Observable<Orders>{
    return this.http.get<Orders>(`${this.url}/orders`,{withCredentials:true})
  }
  AllOrders():Observable<Orders>{
    return this.http.get<Orders>(`${this.url}/allorders`,{withCredentials:true})
  }
}
