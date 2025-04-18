import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Environment {
  Api:string = "https://et1in74t39.execute-api.us-east-1.amazonaws.com/Prod"
  Main:string = "https://lambda-frontend-olive.vercel.app"
}
