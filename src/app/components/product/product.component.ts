import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data:any;

  constructor(private route:Router){
    console.log('data',this.route.getCurrentNavigation()?.extras.state)
    this.data = this.route.getCurrentNavigation()?.extras.state?.['data']
    console.log('this.data',this.data)
  }
 ngOnInit(): void {
 }

}
