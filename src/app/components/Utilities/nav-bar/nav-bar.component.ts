import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/AuthInterface';
import AddressDetailsStoreService from 'src/app/ReduxStore/Address/AddressDetails.service';
import AuthDetailsStoreService from 'src/app/ReduxStore/Auth/AuthDetails.service';
import CartDetailsStoreService from 'src/app/ReduxStore/Cart/CartDetails.service';
import { ClearAddress, ClearCart, ClearWishlist, LogoutUser } from 'src/app/ReduxStore/Store';
import WishlistDetailsStoreService from 'src/app/ReduxStore/Wishlist/WishlistDetails.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogin:boolean = false;
  isAdmin:boolean = false;
  isProfileOpen:boolean = false;

  constructor(private route:Router,private authdetails:AuthDetailsStoreService,private cart:CartDetailsStoreService,private api:ApiService,private wishlist:WishlistDetailsStoreService,private address:AddressDetailsStoreService){}

  items:Product[] = []

  ngOnInit(): void {
    this.cart.state$.subscribe(data => this.items = data.items)
    this.authdetails.state$
      .subscribe(data => {
        this.isLogin = data.isLogin;
        this.isAdmin = data.isAdmin;
    })
  }

  openProfile(){
    this.isProfileOpen = !this.isProfileOpen
  }

  logout(){
    this.authdetails.dispatch(LogoutUser())
    this.cart.dispatch(ClearCart())
    this.address.dispatch(ClearAddress())
    this.wishlist.dispatch(ClearWishlist())
    this.api.Logout().subscribe(data => console.log('data'))
    this.route.navigate(['/home'])
  }


  search(){
    console.log('keydown on enter')
    this.route.navigate(['/login'])
  }

}
