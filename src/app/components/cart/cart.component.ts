import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderingProductInfo, Product } from 'src/app/Interfaces/AuthInterface';
import CartDetailsStoreService from 'src/app/ReduxStore/Cart/CartDetails.service';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service';
import { RemoveFromCart, SetLoading } from 'src/app/ReduxStore/Store';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  products:Product[] = []

  list = [1,2,3,4]

  quantitylist:number[] = []

  constructor(private route:Router,private api:ApiService,private cart:CartDetailsStoreService,private loading:LoadingDetailsStoreService){}

  ngOnInit(): void {
    // this.api.UserDetails().subscribe(data =>  console.log('user details',data))
    // this.loading.dispatch(SetLoading({isLoading:true}))
    // this.cart.getState().items.map((item,index) => {
    //     this.products.push(item)
    //     if(this.cart.getState().items.length-1 === index){
    //       this.loading.dispatch(SetLoading({isLoading:false}))
    //     }
    // })
    // this.loading.dispatch(SetLoading({isLoading:false}))
    this.cart.state$.subscribe(data => this.products = data.items)
    this.products.map(item => this.quantitylist.push(1))
  }

  RemoveFromCart(product:Product,i:number){
    this.quantitylist = this.quantitylist.filter((value,index) => index!=i)
    this.cart.dispatch(RemoveFromCart(product))
  }

  redirectToProduct(data:Product){
    this.route.navigate([`/product/${data.id}`],{ state: {data:data}})
  }

  totalAmount(){
    return this.products.reduce((acc,value,index) => acc+(value.price * this.quantitylist[index]),0)
  }

  checkout(){
    const state:OrderingProductInfo[] = []
    this.products.map((product,index) => {
      state.push({
        product_id:product.id,
        amount:product.price,
        quantity:this.quantitylist[index]
      })
    })
    console.log('state',state)
      this.route.navigate(['/checkout'],{ state:state})
  }

}
