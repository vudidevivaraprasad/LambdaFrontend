import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/AuthInterface';
import AuthDetailsStoreService from 'src/app/ReduxStore/Auth/AuthDetails.service';
import CartDetailsStoreService from 'src/app/ReduxStore/Cart/CartDetails.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogin:boolean = false;
  isAdmin:boolean = false;

  constructor(private route:Router,private authdetails:AuthDetailsStoreService,private cart:CartDetailsStoreService){}

  items:Product[] = []

  ngOnInit(): void {
    this.cart.state$.subscribe(data => this.items = data.items)
    this.authdetails.state$
      .subscribe(data => {
        this.isLogin = data.isLogin;
        this.isAdmin = data.isAdmin;
    })
  }


  search(){
    console.log('keydown on enter')
    this.route.navigate(['/login'])
  }

}
