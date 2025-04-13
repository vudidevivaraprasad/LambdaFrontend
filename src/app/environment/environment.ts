import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Environment {
  Api:string = "http://127.0.0.1:3000"
  Main:string = "http://127.0.0.1:4200"
}
