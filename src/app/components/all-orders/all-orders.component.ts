import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Interfaces/AuthInterface';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service';
import {SetLoading} from 'src/app/ReduxStore/Store'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  orders:Order[] = []
  loader:boolean = false;
//   orders:Order[] = [
//     {
//         "product": {
//             "amount": 100,
//             "product_id": "d14f24fa-b537-46",
//             "quantity": 1
//         },
//         "address": {
//             "area": "",
//             "pincode": 531055,
//             "mobilenumber": 8367360185,
//             "city": "vishakapatanam",
//             "name": "devi varaprasad vudi",
//             "id": 1745240068172,
//             "state": "Andhra pradesh",
//             "village": ""
//         },
//         "order_id": "6cb1b440-c9cd-4b63-9875-0ef21570d317",
//         "Date": 1745240109450,
//         "status": "pending"
//     },
//     {
//         "product": {
//             "amount": 100,
//             "product_id": "d14f24fa-b537-461a-a36b-c4275f8db832",
//             "quantity": 1
//         },
//         "address": {
//             "area": "ramalayam",
//             "pincode": 531055,
//             "mobilenumber": 8367360185,
//             "city": "vishakapatanam",
//             "name": "devi varaprasad vudi",
//             "id": 1745244266071,
//             "state": "Andhra pradesh",
//             "village": "lakkavaram"
//         },
//         "order_id": "6d196572-a4ee-42c5-b91a-8da19f4af58c",
//         "Date": 1745244305473,
//         "status": "pending"
//     }
// ]
  constructor(private api:ApiService,private loading:LoadingDetailsStoreService){

    this.loading.state$.subscribe(data => this.loader = data.isLoading)
  }

  ngOnInit(): void {
    this.loading.dispatch(SetLoading({isLoading:true}))
    this.api.AllOrders().subscribe(data => {
      this.orders = data.result
      this.loading.dispatch(SetLoading({isLoading:false}))
    })
  }

}
