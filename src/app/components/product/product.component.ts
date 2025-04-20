import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderingProductInfo, Product } from 'src/app/Interfaces/AuthInterface';
import CartDetailsStoreService from 'src/app/ReduxStore/Cart/CartDetails.service';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service';
import { AddToCart, SetLoading } from 'src/app/ReduxStore/Store';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data:any;
  cartItems:Product[] = []
  productId:string|null = ''
  quantity:number = 1

  constructor(private route:Router,private activeroute:ActivatedRoute,private cart:CartDetailsStoreService,private loading:LoadingDetailsStoreService,private api:ApiService){
    console.log('data',this.route.getCurrentNavigation()?.extras.state)
    this.data = this.route.getCurrentNavigation()?.extras.state?.['data']
    console.log('this.data',this.data)
  }
 ngOnInit(): void {
  if(!this.data){
    this.productId = this.activeroute.snapshot.paramMap.get('id')
    if(this.productId){
      this.loading.dispatch(SetLoading({isLoading:true}))
      this.api.Product(this.productId)
        .subscribe(data => {
          this.loading.dispatch(SetLoading({isLoading:false}))
          this.data = data.result
      },err =>     this.loading.dispatch(SetLoading({isLoading:false})))
    }
  }
  this.cart.state$.subscribe(data => this.cartItems = data.items)
 }

 CheckoutPage(data:Product){
  const state:OrderingProductInfo[] = [{
    product_id:data.id,
    amount:data.price,
    quantity:this.quantity
  }]
  this.route.navigate(['/checkout'],{ state:state})
 }

 Incart(product:Product){
  return this.cartItems.find(item => item.id === product.id)
}

 AddToCart(item:Product){
    this.cart.dispatch(AddToCart(item))
 }

}
