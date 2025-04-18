import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/Interfaces/AuthInterface';
import AddressDetailsStoreService from 'src/app/ReduxStore/Address/AddressDetails.service';
import { AddToAddress, RemoveFromAddress } from 'src/app/ReduxStore/Store';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressList:Address[] = []

  constructor(private address:AddressDetailsStoreService){}

  ngOnInit(): void {
    this.address.state$.subscribe(data => this.addressList = data.items)
  }

  isAddressOpen:boolean = false

  AddressOpen(){
    this.isAddressOpen = true
  }

  AddToAddress(name:string,mobilenumber:string,pincode:string,state:string,city:string,village:string,area:string){
    this.address.dispatch(AddToAddress({id:Date.now(),name,mobilenumber:parseInt(mobilenumber),pincode:parseInt(pincode),state,city,village,area}))
    this.isAddressOpen = false
  }

  RemoveAddress(i:Address){
    this.address.dispatch(RemoveFromAddress(i))
  }
  limitPincode(pincode:Event){
    const tag = pincode.target as HTMLInputElement
    console.log('limitpincode',tag.value)
    if(tag.value.length>6){
      tag.value = tag.value.slice(0,6)
    }
  }

  limitMobileNumber(number:Event){
    const tag = number.target as HTMLInputElement
    console.log('limitpincode',tag.value)
    if(tag.value.length>10){
      tag.value = tag.value.slice(0,10)
    }
  }

}
