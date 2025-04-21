import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, Orders, Product } from 'src/app/Interfaces/AuthInterface';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service';
import ProductsDetailsStoreService from 'src/app/ReduxStore/Products/ProductDetails.service';
import { SetLoading } from 'src/app/ReduxStore/Store';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Order[] = []
  products:Product[] = []

  constructor(private api:ApiService,private loading:LoadingDetailsStoreService,private product:ProductsDetailsStoreService,private route:Router){}

  ngOnInit(): void {
    this.loading.dispatch(SetLoading({isLoading:true}))
    this.api.Orders()
      .subscribe(data => {
        this.orders = data.result
        this.loading.dispatch(SetLoading({isLoading:false}))
        this.orders.map(order => {
            const found = this.product.getState().result.find(product => product.id === order.product.product_id)
            found?this.products.push(found):''
          })
        console.log('products',this.products)
      },
        err=> {
          console.log('error',err)
          this.loading.dispatch(SetLoading({isLoading:false}))
        })
  }

  date(date:number){
    return new Date(date)
  }

  redirecttoproduct(product:Product){
    this.route.navigate([`/product/${product.id}`],{ state: {data:product}})
  }

  TotalAmount(quantity:number,amount:number){
    return quantity*amount
  }

}
