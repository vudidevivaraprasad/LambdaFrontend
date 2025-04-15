import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CartDetailsStoreService from 'src/app/ReduxStore/Cart/CartDetails.service';
import { AddToCart } from 'src/app/ReduxStore/Store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data:any;
  cartItems:string[] = []

  constructor(private route:Router,private cart:CartDetailsStoreService){
    console.log('data',this.route.getCurrentNavigation()?.extras.state)
    this.data = this.route.getCurrentNavigation()?.extras.state?.['data']
    console.log('this.data',this.data)
  }
 ngOnInit(): void {
  this.cart.state$.subscribe(data => this.cartItems = data.items)
 }

 AddToCart(item:any){
    this.cart.dispatch(AddToCart(item))
 }

}
