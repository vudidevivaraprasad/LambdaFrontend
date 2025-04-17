import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AllProducts, Auth, ForgetPassword, ForgetPasswordResult, ForgetpasswordToken, ForgetpasswordTokenResult, Login, Message, OneProduct, RegisterAuth } from '../Interfaces/AuthInterface';
import { Environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected url = this.env.Api

  constructor(private http:HttpClient,private env:Environment) { }


  AuthVerification():Observable<Auth>{
    return this.http.get<Auth>(`${this.url}/userverification`,{withCredentials:true})
  }

  AuthVerificationwithtoken(token:string | null):Observable<Auth>{
    return this.http.get<Auth>(`${this.url}/userverification?token=${token}`,{withCredentials:true})
  }

  Login(details:Login):Observable<Auth>{
    return this.http.post<Auth>(`${this.url}/login`,details,{withCredentials:true})
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

  Products():Observable<AllProducts>{
    return this.http.get<AllProducts>(`${this.url}/products`)
  }

  Product(id:string):Observable<OneProduct>{
    return this.http.get<OneProduct>(`${this.url}/products/${id}`)
  }

  UserDetails():Observable<any>{
    return this.http.get(`${this.url}/userdetails`,{ withCredentials:true })
  }
}
