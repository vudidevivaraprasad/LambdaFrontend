import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address, Checkout, OrderingProductInfo } from 'src/app/Interfaces/AuthInterface';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service';
import { SetLoading } from 'src/app/ReduxStore/Store';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  step1:boolean = true;
  step2:boolean = false;
  address:Address = {} as Address;
  isaddressselected:boolean = true;
  product:any;
  amountlist:number[] = []
  quantitylist:number[] = []
  productslist:string[] = []

  constructor(private api:ApiService,private route:Router,private loading:LoadingDetailsStoreService){
    this.product = this.route.getCurrentNavigation()?.extras.state
    console.log('ordering product info',this.product)
    this.product.map((i:any) => {
      this.amountlist.push(i.amount)
      this.quantitylist.push(i.quantity)
      this.productslist.push(i.product_id)
    })
    console.log('amountlist',this.amountlist)
    console.log('amountlist',this.quantitylist)
    console.log('amountlist',this.productslist)
  }

  ngOnInit(): void {

  }

  checkout(){
    const data:Checkout = {
      address:this.address,
      amount:this.amountlist,
      quantity:this.quantitylist,
      products:this.productslist
    }
    this.loading.dispatch(SetLoading({isLoading:true}))

    this.api.Checkout(data).subscribe(data => {
      this.loading.dispatch(SetLoading({isLoading:false}))
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
