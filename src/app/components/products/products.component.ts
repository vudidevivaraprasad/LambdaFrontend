import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/AuthInterface';
import CartDetailsStoreService from 'src/app/ReduxStore/Cart/CartDetails.service';
import SkeletonLoadingDetailsStoreService from 'src/app/ReduxStore/SkeletonLoading/SkeletonLoadingDetails.service';
import { AddToCart, SetSkeletonLoading } from 'src/app/ReduxStore/Store';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  isLoading:boolean = false;
  cartItems:string[] = []
  // products:Product[] = []

  constructor(private loading:SkeletonLoadingDetailsStoreService,private route:Router,private cart:CartDetailsStoreService,private api:ApiService){}

  ngOnInit(): void {
    this.loading.state$.subscribe(data => this.isLoading = data.isLoading)
    this.cart.state$.subscribe(data => this.cartItems = data.items)
    this.loading.dispatch(SetSkeletonLoading({isLoading:true}))
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

  redirectToProduct(data:any){
    this.route.navigate(['/product'],{ state: {data:data}})
  }

  AddToCart(data:any){
    this.cart.dispatch(AddToCart(data?.id))
  }

  wishlistclicked(){
    console.log('clicked')
  }

  products = [
    {
    "id": '9',
    "title": "Classic Navy Blue Baseball Cap",
    "slug": "classic-navy-blue-baseball-cap",
    "price": 61,
    "description": "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
    "category": {
    "id": 1,
    "name": "Clothes",
    "slug": "clothes",
    "image": "https://imgur.com/HmvYLNi",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T22:04:21.000Z"
    },
    "images": [
    "https://i.imgur.com/R3iobJA.jpeg",
    "https://i.imgur.com/Wv2KTsf.jpeg",
    "https://i.imgur.com/76HAxcA.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '11',
    "title": "Classic Red Baseball Cap",
    "slug": "classic-red-baseball-cap",
    "price": 35,
    "description": "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
    "category": {
    "id": 1,
    "name": "Clothes",
    "slug": "clothes",
    "image": "https://imgur.com/HmvYLNi",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T22:04:21.000Z"
    },
    "images": [
    "https://i.imgur.com/cBuLvBi.jpeg",
    "https://i.imgur.com/N1GkCIR.jpeg",
    "https://i.imgur.com/kKc9A5p.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id":'12',
    "title": "Classic Black Baseball Cap",
    "slug": "classic-black-baseball-cap",
    "price": 58,
    "description": "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
    "category": {
    "id": 1,
    "name": "Clothes",
    "slug": "clothes",
    "image": "https://imgur.com/HmvYLNi",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T22:04:21.000Z"
    },
    "images": [
    "https://i.imgur.com/KeqG6r4.jpeg",
    "https://i.imgur.com/xGQOw3p.jpeg",
    "https://i.imgur.com/oO5OUjb.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '13',
    "title": "Classic Olive Chino Shorts",
    "slug": "classic-olive-chino-shorts",
    "price": 84,
    "description": "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
    "category": {
    "id": 1,
    "name": "Clothes",
    "slug": "clothes",
    "image": "https://imgur.com/HmvYLNi",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T22:04:21.000Z"
    },
    "images": [
    "https://i.imgur.com/UsFIvYs.jpeg",
    "https://i.imgur.com/YIq57b6.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '15',
    "title": "Classic White Crew Neck T-Shirt",
    "slug": "classic-white-crew-neck-t-shirt",
    "price": 39,
    "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
    "category": {
    "id": 1,
    "name": "Clothes",
    "slug": "clothes",
    "image": "https://imgur.com/HmvYLNi",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T22:04:21.000Z"
    },
    "images": [
    "https://i.imgur.com/axsyGpD.jpeg",
    "https://i.imgur.com/T8oq9X2.jpeg",
    "https://i.imgur.com/J6MinJn.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '16',
    "title": "Classic White Tee - Timeless Style and Comfort",
    "slug": "classic-white-tee-timeless-style-and-comfort",
    "price": 73,
    "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
    "category": {
    "id": 1,
    "name": "Clothes",
    "slug": "clothes",
    "image": "https://imgur.com/HmvYLNi",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T22:04:21.000Z"
    },
    "images": [
    "https://i.imgur.com/Y54Bt8J.jpeg",
    "https://i.imgur.com/SZPDSgy.jpeg",
    "https://i.imgur.com/sJv4Xx0.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '17',
    "title": "Classic Black T-Shirt",
    "slug": "classic-black-t-shirt",
    "price": 35,
    "description": "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
    "category": {
    "id": 1,
    "name": "Clothes",
    "slug": "clothes",
    "image": "https://imgur.com/HmvYLNi",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T22:04:21.000Z"
    },
    "images": [
    "https://i.imgur.com/9DqEOV5.jpeg",
    "https://i.imgur.com/ae0AEYn.jpeg",
    "https://i.imgur.com/mZ4rUjj.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '18',
    "title": "Sleek White & Orange Wireless Gaming Controller",
    "slug": "sleek-white-orange-wireless-gaming-controller",
    "price": 69,
    "description": "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
    "category": {
    "id": 2,
    "name": "food",
    "slug": "food",
    "image": "https://i.imgur.com/ZANVnHE.jpeg",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-13T12:58:51.000Z"
    },
    "images": [
    "https://i.imgur.com/ZANVnHE.jpeg",
    "https://i.imgur.com/Ro5z6Tn.jpeg",
    "https://i.imgur.com/woA93Li.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '19',
    "title": "Sleek Wireless Headphone & Inked Earbud Set",
    "slug": "sleek-wireless-headphone-inked-earbud-set",
    "price": 44,
    "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
    "category": {
    "id": 2,
    "name": "food",
    "slug": "food",
    "image": "https://i.imgur.com/ZANVnHE.jpeg",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-13T12:58:51.000Z"
    },
    "images": [
    "https://i.imgur.com/yVeIeDa.jpeg",
    "https://i.imgur.com/jByJ4ih.jpeg",
    "https://i.imgur.com/KXj6Tpb.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '20',
    "title": "Sleek Comfort-Fit Over-Ear Headphones",
    "slug": "sleek-comfort-fit-over-ear-headphones",
    "price": 28,
    "description": "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
    "category": {
    "id": 2,
    "name": "food",
    "slug": "food",
    "image": "https://i.imgur.com/ZANVnHE.jpeg",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-13T12:58:51.000Z"
    },
    "images": [
    "https://i.imgur.com/SolkFEB.jpeg",
    "https://i.imgur.com/KIGW49u.jpeg",
    "https://i.imgur.com/mWwek7p.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '21',
    "title": "Efficient 2-Slice Toaster",
    "slug": "efficient-2-slice-toaster",
    "price": 48,
    "description": "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
    "category": {
    "id": 2,
    "name": "food",
    "slug": "food",
    "image": "https://i.imgur.com/ZANVnHE.jpeg",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-13T12:58:51.000Z"
    },
    "images": [
    "https://i.imgur.com/keVCVIa.jpeg",
    "https://i.imgur.com/afHY7v2.jpeg",
    "https://i.imgur.com/yAOihUe.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '22',
    "title": "Sleek Wireless Computer Mouse",
    "slug": "sleek-wireless-computer-mouse",
    "price": 10,
    "description": "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
    "category": {
    "id": 2,
    "name": "food",
    "slug": "food",
    "image": "https://i.imgur.com/ZANVnHE.jpeg",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-13T12:58:51.000Z"
    },
    "images": [
    "https://i.imgur.com/w3Y8NwQ.jpeg",
    "https://i.imgur.com/WJFOGIC.jpeg",
    "https://i.imgur.com/dV4Nklf.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '23',
    "title": "Sleek Modern Laptop with Ambient Lighting",
    "slug": "sleek-modern-laptop-with-ambient-lighting",
    "price": 43,
    "description": "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
    "category": {
    "id": 2,
    "name": "food",
    "slug": "food",
    "image": "https://i.imgur.com/ZANVnHE.jpeg",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-13T12:58:51.000Z"
    },
    "images": [
    "https://i.imgur.com/OKn1KFI.jpeg",
    "https://i.imgur.com/G4f21Ai.jpeg",
    "https://i.imgur.com/Z9oKRVJ.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '24',
    "title": "Sleek Modern Laptop for Professionals",
    "slug": "sleek-modern-laptop-for-professionals",
    "price": 97,
    "description": "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
    "category": {
    "id": 2,
    "name": "food",
    "slug": "food",
    "image": "https://i.imgur.com/ZANVnHE.jpeg",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-13T12:58:51.000Z"
    },
    "images": [
    "https://i.imgur.com/ItHcq7o.jpeg",
    "https://i.imgur.com/55GM3XZ.jpeg",
    "https://i.imgur.com/tcNJxoW.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    {
    "id": '25',
    "title": "Stylish Red & Silver Over-Ear Headphones",
    "slug": "stylish-red-silver-over-ear-headphones",
    "price": 39,
    "description": "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
    "category": {
    "id": 2,
    "name": "food",
    "slug": "food",
    "image": "https://i.imgur.com/ZANVnHE.jpeg",
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-13T12:58:51.000Z"
    },
    "images": [
    "https://i.imgur.com/YaSqa06.jpeg",
    "https://i.imgur.com/isQAliJ.jpeg",
    "https://i.imgur.com/5B8UQfh.jpeg"
    ],
    "creationAt": "2025-04-12T21:56:42.000Z",
    "updatedAt": "2025-04-12T21:56:42.000Z"
    },
    // {
    // "id": 26,
    // "title": "Sleek Mirror Finish Phone Case",
    // "slug": "sleek-mirror-finish-phone-case",
    // "price": 27,
    // "description": "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
    // "category": {
    // "id": 2,
    // "name": "food",
    // "slug": "food",
    // "image": "https://i.imgur.com/ZANVnHE.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-13T12:58:51.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/yb9UQKL.jpeg",
    // "https://i.imgur.com/m2owtQG.jpeg",
    // "https://i.imgur.com/bNiORct.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 27,
    // "title": "Sleek Smartwatch with Vibrant Display",
    // "slug": "sleek-smartwatch-with-vibrant-display",
    // "price": 16,
    // "description": "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
    // "category": {
    // "id": 2,
    // "name": "food",
    // "slug": "food",
    // "image": "https://i.imgur.com/ZANVnHE.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-13T12:58:51.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/LGk9Jn2.jpeg",
    // "https://i.imgur.com/1ttYWaI.jpeg",
    // "https://i.imgur.com/sPRWnJH.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 28,
    // "title": "Sleek Modern Leather Sofa",
    // "slug": "sleek-modern-leather-sofa",
    // "price": 53,
    // "description": "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
    // "category": {
    // "id": 3,
    // "name": "Furniture",
    // "slug": "furniture",
    // "image": "https://i.imgur.com/Qphac99.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/Qphac99.jpeg",
    // "https://i.imgur.com/dJjpEgG.jpeg",
    // "https://i.imgur.com/MxJyADq.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 29,
    // "title": "Mid-Century Modern Wooden Dining Table",
    // "slug": "mid-century-modern-wooden-dining-table",
    // "price": 24,
    // "description": "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    // "category": {
    // "id": 3,
    // "name": "Furniture",
    // "slug": "furniture",
    // "image": "https://i.imgur.com/Qphac99.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/DMQHGA0.jpeg",
    // "https://i.imgur.com/qrs9QBg.jpeg",
    // "https://i.imgur.com/XVp8T1I.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 30,
    // "title": "Elegant Golden-Base Stone Top Dining Table",
    // "slug": "elegant-golden-base-stone-top-dining-table",
    // "price": 66,
    // "description": "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    // "category": {
    // "id": 3,
    // "name": "Furniture",
    // "slug": "furniture",
    // "image": "https://i.imgur.com/Qphac99.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/NWIJKUj.jpeg",
    // "https://i.imgur.com/Jn1YSLk.jpeg",
    // "https://i.imgur.com/VNZRvx5.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 31,
    // "title": "Modern Elegance Teal Armchair",
    // "slug": "modern-elegance-teal-armchair",
    // "price": 25,
    // "description": "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    // "category": {
    // "id": 3,
    // "name": "Furniture",
    // "slug": "furniture",
    // "image": "https://i.imgur.com/Qphac99.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/6wkyyIN.jpeg",
    // "https://i.imgur.com/Ald3Rec.jpeg",
    // "https://i.imgur.com/dIqo03c.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 32,
    // "title": "Elegant Solid Wood Dining Table",
    // "slug": "elegant-solid-wood-dining-table",
    // "price": 67,
    // "description": "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    // "category": {
    // "id": 3,
    // "name": "Furniture",
    // "slug": "furniture",
    // "image": "https://i.imgur.com/Qphac99.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/4lTaHfF.jpeg",
    // "https://i.imgur.com/JktHE1C.jpeg",
    // "https://i.imgur.com/cQeXQMi.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 33,
    // "title": "Modern Minimalist Workstation Setup",
    // "slug": "modern-minimalist-workstation-setup",
    // "price": 49,
    // "description": "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    // "category": {
    // "id": 3,
    // "name": "Furniture",
    // "slug": "furniture",
    // "image": "https://i.imgur.com/Qphac99.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/3oXNBst.jpeg",
    // "https://i.imgur.com/ErYYZnT.jpeg",
    // "https://i.imgur.com/boBPwYW.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 34,
    // "title": "Modern Ergonomic Office Chair",
    // "slug": "modern-ergonomic-office-chair",
    // "price": 71,
    // "description": "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
    // "category": {
    // "id": 3,
    // "name": "Furniture",
    // "slug": "furniture",
    // "image": "https://i.imgur.com/Qphac99.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/3dU0m72.jpeg",
    // "https://i.imgur.com/zPU3EVa.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 35,
    // "title": "Futuristic Holographic Soccer Cleats",
    // "slug": "futuristic-holographic-soccer-cleats",
    // "price": 39,
    // "description": "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
    // "category": {
    // "id": 4,
    // "name": "Shoes",
    // "slug": "shoes",
    // "image": "https://i.imgur.com/qNOjJje.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/qNOjJje.jpeg",
    // "https://i.imgur.com/NjfCFnu.jpeg",
    // "https://i.imgur.com/eYtvXS1.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 36,
    // "title": "Rainbow Glitter High Heels",
    // "slug": "rainbow-glitter-high-heels",
    // "price": 39,
    // "description": "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
    // "category": {
    // "id": 4,
    // "name": "Shoes",
    // "slug": "shoes",
    // "image": "https://i.imgur.com/qNOjJje.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/62gGzeF.jpeg",
    // "https://i.imgur.com/5MoPuFM.jpeg",
    // "https://i.imgur.com/sUVj7pK.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 37,
    // "title": "Chic Summer Denim Espadrille Sandals",
    // "slug": "chic-summer-denim-espadrille-sandals",
    // "price": 33,
    // "description": "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
    // "category": {
    // "id": 4,
    // "name": "Shoes",
    // "slug": "shoes",
    // "image": "https://i.imgur.com/qNOjJje.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/9qrmE1b.jpeg",
    // "https://i.imgur.com/wqKxBVH.jpeg",
    // "https://i.imgur.com/sWSV6DK.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 38,
    // "title": "Vibrant Runners: Bold Orange & Blue Sneakers",
    // "slug": "vibrant-runners-bold-orange-blue-sneakers",
    // "price": 27,
    // "description": "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
    // "category": {
    // "id": 4,
    // "name": "Shoes",
    // "slug": "shoes",
    // "image": "https://i.imgur.com/qNOjJje.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/hKcMNJs.jpeg",
    // "https://i.imgur.com/NYToymX.jpeg",
    // "https://i.imgur.com/HiiapCt.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 39,
    // "title": "Vibrant Pink Classic Sneakers",
    // "slug": "vibrant-pink-classic-sneakers",
    // "price": 84,
    // "description": "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    // "category": {
    // "id": 4,
    // "name": "Shoes",
    // "slug": "shoes",
    // "image": "https://i.imgur.com/qNOjJje.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/mcW42Gi.jpeg",
    // "https://i.imgur.com/mhn7qsF.jpeg",
    // "https://i.imgur.com/F8vhnFJ.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 40,
    // "title": "Futuristic Silver and Gold High-Top Sneaker",
    // "slug": "futuristic-silver-and-gold-high-top-sneaker",
    // "price": 68,
    // "description": "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
    // "category": {
    // "id": 4,
    // "name": "Shoes",
    // "slug": "shoes",
    // "image": "https://i.imgur.com/qNOjJje.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/npLfCGq.jpeg",
    // "https://i.imgur.com/vYim3gj.jpeg",
    // "https://i.imgur.com/HxuHwBO.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 41,
    // "title": "Futuristic Chic High-Heel Boots",
    // "slug": "futuristic-chic-high-heel-boots",
    // "price": 36,
    // "description": "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    // "category": {
    // "id": 4,
    // "name": "Shoes",
    // "slug": "shoes",
    // "image": "https://i.imgur.com/qNOjJje.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/HqYqLnW.jpeg",
    // "https://i.imgur.com/RlDGnZw.jpeg",
    // "https://i.imgur.com/qa0O6fg.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 42,
    // "title": "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    // "slug": "elegant-patent-leather-peep-toe-pumps",
    // "price": 53,
    // "description": "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    // "category": {
    // "id": 4,
    // "name": "Shoes",
    // "slug": "shoes",
    // "image": "https://i.imgur.com/qNOjJje.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/AzAY4Ed.jpeg",
    // "https://i.imgur.com/umfnS9P.jpeg",
    // "https://i.imgur.com/uFyuvLg.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 43,
    // "title": "Elegant Purple Leather Loafers",
    // "slug": "elegant-purple-leather-loafers",
    // "price": 17,
    // "description": "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
    // "category": {
    // "id": 4,
    // "name": "Shoes",
    // "slug": "shoes",
    // "image": "https://i.imgur.com/qNOjJje.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/Au8J9sX.jpeg",
    // "https://i.imgur.com/gdr8BW2.jpeg",
    // "https://i.imgur.com/KDCZxnJ.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 44,
    // "title": "Classic Blue Suede Casual Shoes",
    // "slug": "classic-blue-suede-casual-shoes",
    // "price": 39,
    // "description": "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
    // "category": {
    // "id": 4,
    // "name": "Shoes",
    // "slug": "shoes",
    // "image": "https://i.imgur.com/qNOjJje.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/sC0ztOB.jpeg",
    // "https://i.imgur.com/Jf9DL9R.jpeg",
    // "https://i.imgur.com/R1IN95T.jpeg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 45,
    // "title": "Sleek Futuristic Electric Bicycle",
    // "slug": "sleek-futuristic-electric-bicycle",
    // "price": 22,
    // "description": "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
    // "category": {
    // "id": 5,
    // "name": "Miscellaneous",
    // "slug": "miscellaneous",
    // "image": "https://i.imgur.com/BG8J0Fj.jpg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/BG8J0Fj.jpg",
    // "https://i.imgur.com/ujHBpCX.jpg",
    // "https://i.imgur.com/WHeVL9H.jpg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 46,
    // "title": "Sleek All-Terrain Go-Kart",
    // "slug": "sleek-all-terrain-go-kart",
    // "price": 37,
    // "description": "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
    // "category": {
    // "id": 5,
    // "name": "Miscellaneous",
    // "slug": "miscellaneous",
    // "image": "https://i.imgur.com/BG8J0Fj.jpg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/Ex5x3IU.jpg",
    // "https://i.imgur.com/z7wAQwe.jpg",
    // "https://i.imgur.com/kc0Dj9S.jpg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 47,
    // "title": "Radiant Citrus Eau de Parfum",
    // "slug": "radiant-citrus-eau-de-parfum",
    // "price": 73,
    // "description": "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
    // "category": {
    // "id": 5,
    // "name": "Miscellaneous",
    // "slug": "miscellaneous",
    // "image": "https://i.imgur.com/BG8J0Fj.jpg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/xPDwUb3.jpg",
    // "https://i.imgur.com/3rfp691.jpg",
    // "https://i.imgur.com/kG05a29.jpg"
    // ],
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // {
    // "id": 59,
    // "title": "Producto 59",
    // "slug": "producto-59",
    // "price": 59,
    // "description": "A description",
    // "category": {
    // "id": 2,
    // "name": "food",
    // "slug": "food",
    // "image": "https://i.imgur.com/ZANVnHE.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-13T12:58:51.000Z"
    // },
    // "images": [
    // "https://img.freepik.com/vector-premium/icono-bolsa-tienda-pictograma-paquete-compras-simbolo-venta-signo-paquete-regalo-comprar-pegatina-tienda-ilustracion-mercado-moda-comprar-presente-caja-emblema_114482-591.jpg"
    // ],
    // "creationAt": "2025-04-13T00:14:54.000Z",
    // "updatedAt": "2025-04-13T05:26:22.000Z"
    // },
    // {
    // "id": 60,
    // "title": "Postat Crown",
    // "slug": "postat-crown",
    // "price": 100,
    // "description": "Royal35 ItemsRoyal35 ItemsRoyal35 ItemsRoyal35 ItemsRoyal35 ItemsRoyal35 ItemsRoyal35 ItemsRoyal35 Items",
    // "category": {
    // "id": 26,
    // "name": "Royal325 Items",
    // "slug": "royal325-items",
    // "image": "https://i.imgur.com/49FiVI0.png",
    // "creationAt": "2025-04-13T00:42:19.000Z",
    // "updatedAt": "2025-04-13T00:42:19.000Z"
    // },
    // "images": [
    // "https://i.imgur.com/49FiVI0.png",
    // "https://i.imgur.com/49FiVI0.png",
    // "https://i.imgur.com/49FiVI0.png"
    // ],
    // "creationAt": "2025-04-13T00:42:21.000Z",
    // "updatedAt": "2025-04-13T00:42:21.000Z"
    // },
    // {
    // "id": 61,
    // "title": "Producto 61",
    // "slug": "producto-61",
    // "price": 120,
    // "description": "Un termo de verdad y no uno poser como los stanley",
    // "category": {
    // "id": 3,
    // "name": "Furniture",
    // "slug": "furniture",
    // "image": "https://i.imgur.com/Qphac99.jpeg",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T21:56:42.000Z"
    // },
    // "images": [
    // "https://img.freepik.com/vector-premium/icono-bolsa-tienda-pictograma-paquete-compras-simbolo-venta-signo-paquete-regalo-comprar-pegatina-tienda-ilustracion-mercado-moda-comprar-presente-caja-emblema_114482-591.jpg"
    // ],
    // "creationAt": "2025-04-13T01:11:50.000Z",
    // "updatedAt": "2025-04-13T05:27:28.000Z"
    // },
    // {
    // "id": 62,
    // "title": "New Product",
    // "slug": "new-product",
    // "price": 10,
    // "description": "2",
    // "category": {
    // "id": 1,
    // "name": "Clothes",
    // "slug": "clothes",
    // "image": "https://imgur.com/HmvYLNi",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T22:04:21.000Z"
    // },
    // "images": [
    // "https://placeimg.com/640/480/any"
    // ],
    // "creationAt": "2025-04-13T06:05:15.000Z",
    // "updatedAt": "2025-04-13T06:05:15.000Z"
    // },
    // {
    // "id": 63,
    // "title": "New Producteeeeee",
    // "slug": "new-producteeeeee",
    // "price": 10,
    // "description": "A description",
    // "category": {
    // "id": 1,
    // "name": "Clothes",
    // "slug": "clothes",
    // "image": "https://imgur.com/HmvYLNi",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T22:04:21.000Z"
    // },
    // "images": [
    // "https://placehold.co/600x400"
    // ],
    // "creationAt": "2025-04-13T06:18:14.000Z",
    // "updatedAt": "2025-04-13T06:18:14.000Z"
    // },
    // {
    // "id": 64,
    // "title": "New Cotton Shirt",
    // "slug": "new-cotton-shirt",
    // "price": 1100,
    // "description": "Very nice and attractive",
    // "category": {
    // "id": 1,
    // "name": "Clothes",
    // "slug": "clothes",
    // "image": "https://imgur.com/HmvYLNi",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T22:04:21.000Z"
    // },
    // "images": [
    // "https://placeimg.com/640/480/cotton"
    // ],
    // "creationAt": "2025-04-13T11:00:33.000Z",
    // "updatedAt": "2025-04-13T11:00:33.000Z"
    // },
    // {
    // "id": 65,
    // "title": "Mobile Phones",
    // "slug": "mobile-phones",
    // "price": 10,
    // "description": "A description",
    // "category": {
    // "id": 1,
    // "name": "Clothes",
    // "slug": "clothes",
    // "image": "https://imgur.com/HmvYLNi",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T22:04:21.000Z"
    // },
    // "images": [
    // "https://placeimg.com/640/480/any"
    // ],
    // "creationAt": "2025-04-13T11:00:36.000Z",
    // "updatedAt": "2025-04-13T11:00:36.000Z"
    // },
    // {
    // "id": 66,
    // "title": "limted addition of Product",
    // "slug": "limted-addition-of-product",
    // "price": 10,
    // "description": "Amazing hair straightener",
    // "category": {
    // "id": 1,
    // "name": "Clothes",
    // "slug": "clothes",
    // "image": "https://imgur.com/HmvYLNi",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T22:04:21.000Z"
    // },
    // "images": [
    // "https://placehold.co/600x400"
    // ],
    // "creationAt": "2025-04-13T12:38:10.000Z",
    // "updatedAt": "2025-04-13T12:38:10.000Z"
    // },
    // {
    // "id": 67,
    // "title": "Amazing hair straightener",
    // "slug": "amazing-hair-straightener",
    // "price": 10,
    // "description": "Amazing hair straightener",
    // "category": {
    // "id": 1,
    // "name": "Clothes",
    // "slug": "clothes",
    // "image": "https://imgur.com/HmvYLNi",
    // "creationAt": "2025-04-12T21:56:42.000Z",
    // "updatedAt": "2025-04-12T22:04:21.000Z"
    // },
    // "images": [
    // "https://placehold.co/600x400"
    // ],
    // "creationAt": "2025-04-13T12:46:31.000Z",
    // "updatedAt": "2025-04-13T12:46:31.000Z"
    // }
    ]

}
