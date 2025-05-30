import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Address, Checkout, OrderingProductInfo, Product } from 'src/app/Interfaces/AuthInterface';
import CartDetailsStoreService from 'src/app/ReduxStore/Cart/CartDetails.service';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service';
import ProductsDetailsStoreService from 'src/app/ReduxStore/Products/ProductDetails.service';
import { RemoveFromCart, SetLoading } from 'src/app/ReduxStore/Store';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit,OnDestroy {

  step1:boolean = true;
  step2:boolean = false;
  finalstep:string = '';
  address:Address = {} as Address;
  isaddressselected:boolean = true;
  product:any;
  amountlist:number[] = []
  quantitylist:number[] = []
  productslist:string[] = []
  allproducts:Product[] = []

  private destroy$ = new Subject<void>();

  constructor(private api:ApiService,private route:Router,private loading:LoadingDetailsStoreService,private cart:CartDetailsStoreService,private products:ProductsDetailsStoreService){
    console.log(this.route.getCurrentNavigation())
    console.log(this.route.getCurrentNavigation()?.extras)
    console.log(this.route.getCurrentNavigation()?.extras.state)
    this.route.getCurrentNavigation()?.extras.state?'':this.route.navigate(['/home'])
    this.product = this.route.getCurrentNavigation()?.extras.state
    console.log('ordering product info',this.product)
    this.product.map((i:any) => {
      this.amountlist.push(i.amount)
      this.quantitylist.push(i.quantity)
      this.productslist.push(i.product_id)
    })
    console.log('amountlist',this.amountlist)
    console.log('quantitylist',this.quantitylist)
    console.log('productslist',this.productslist)
  }

  ngOnInit(): void {
      this.products.state$.subscribe(data => this.allproducts = data.result)
  }

  ngOnDestroy(): void {
      this.step1 = true;
      this.step2 = false;
      this.finalstep = '';
      this.destroy$.next();
      this.destroy$.complete();
      this.loading.dispatch(SetLoading({isLoading:false}))
  }

  checkout(){
    const data:Checkout = {
      address:this.address,
      amount:this.amountlist,
      quantity:this.quantitylist,
      products:this.productslist
    }
    this.step2 = false
    this.loading.dispatch(SetLoading({isLoading:true}))

    this.api.Checkout(data).pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      this.loading.dispatch(SetLoading({isLoading:false}))
      if(data.message === 'order added successfully'){
        this.finalstep = 'success'
        this.productslist.forEach(product => {
          this.cart.dispatch(RemoveFromCart(this.allproducts.find(p => p.id === product) || {} as Product))
        })
      }
      else{
        this.finalstep = 'failed'
      }
    },err => this.loading.dispatch(SetLoading({isLoading:false})))
  }

  selectedaddress($event:Address){
    console.log('selected address',$event)
    this.isaddressselected = true
    this.address = $event;
  }

  verifystep1(){
    console.log('address',this.address)
    if(this.address?.id){
      this.step2 = true;
      this.step1 = false;
    }
    else{
      this.isaddressselected = false
    }
  }

  firststepvisible(){
    this.step2 = false;
    this.step1 = true;
  }
}
