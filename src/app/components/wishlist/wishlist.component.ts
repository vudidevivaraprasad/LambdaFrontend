import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/AuthInterface';
import WishlistDetailsStoreService from 'src/app/ReduxStore/Wishlist/WishlistDetails.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  // products:Product[] = [
  //       {
  //         "image": "1744799238033.jpg",
  //         "createdAt": 1744799239931,
  //         "price": 100,
  //         "description": "just bulb",
  //         "id": "7e9bcce4-22a9-4b37-be80-116f98c61fc8",
  //         "title": "dev-weather-app",
  //         "category": "Grocery",
  //         "subcategory": "bulb",
  //         "updatedAt": 1744799239931
  //       },
  //       {
  //         "image": "1744799270847.jpg",
  //         "createdAt": 1744799272595,
  //         "price": 100,
  //         "description": "just bulb",
  //         "id": "cd6e4b89-ebb4-4050-8e2f-5e3d2f8eb609",
  //         "title": "dev-weather-app",
  //         "category": "Grocery",
  //         "subcategory": "bulb",
  //         "updatedAt": 1744799272595
  //       },
  //       {
  //         "image": "1744799302261.jpg",
  //         "createdAt": 1744799304020,
  //         "price": 100,
  //         "description": "just bulb",
  //         "id": "d14f24fa-b537-461a-a36b-c4275f8db832",
  //         "title": "dev-weather-app",
  //         "category": "Grocery",
  //         "subcategory": "bulb",
  //         "updatedAt": 1744799304020
  //       }
  //     ]

  products:Product[] = []

  constructor(private wishlist:WishlistDetailsStoreService){}

  ngOnInit(): void {
    this.wishlist.state$.subscribe(data => this.products = data.items)
  }

}
