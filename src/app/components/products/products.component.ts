import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/AuthInterface';
import CartDetailsStoreService from 'src/app/ReduxStore/Cart/CartDetails.service';
import SkeletonLoadingDetailsStoreService from 'src/app/ReduxStore/SkeletonLoading/SkeletonLoadingDetails.service';
import { AddToCart, AddToWishlist, RemoveFromWishlist, SetSkeletonLoading } from 'src/app/ReduxStore/Store';
import WishlistDetailsStoreService from 'src/app/ReduxStore/Wishlist/WishlistDetails.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: Product[] = [];
  isLoading:boolean = false;
  cartItems:Product[] = []
  wishlistItems:Product[] = []
  // products:Product[] = []

  constructor(private loading:SkeletonLoadingDetailsStoreService,private route:Router,private cart:CartDetailsStoreService,private api:ApiService,private wishlist:WishlistDetailsStoreService){}

  ngOnInit(): void {
    this.loading.state$.subscribe(data => this.isLoading = data.isLoading)
    this.cart.state$.subscribe(data => this.cartItems = data.items)
    this.wishlist.state$.subscribe(data => this.wishlistItems = data.items)
    // this.loading.dispatch(SetSkeletonLoading({isLoading:true}))
    // this.api.Products().subscribe(data => {
    //     this.products = data.result
    //     this.loading.dispatch(SetSkeletonLoading({isLoading:false}))
    // },err =>         this.loading.dispatch(SetSkeletonLoading({isLoading:false})))
    setTimeout(() => {
      this.loading.dispatch(SetSkeletonLoading({isLoading:true}))
      setTimeout(() => {

        this.loading.dispatch(SetSkeletonLoading({isLoading:false}))
      }, 1000);
    }, 100);
  }

  redirectToProduct(data:Product){
    this.route.navigate([`/product/${data.id}`],{ state: {data:data}})
  }

  Incart(product:Product){
    return this.cartItems.find(item => item.id === product.id)
  }

  InWishlist(product:Product){
    return this.wishlistItems.find(item => item.id === product.id)
  }

  AddToCart(data:Product){
    this.cart.dispatch(AddToCart(data))
  }

  wishlistclicked(product:Product){
    if(this.InWishlist(product)){
      this.wishlist.dispatch(RemoveFromWishlist(product))
    }
    else{
      this.wishlist.dispatch(AddToWishlist(product))
    }
  }

}
