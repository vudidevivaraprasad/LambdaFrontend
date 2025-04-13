import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AuthDetailsStoreService from 'src/app/ReduxStore/Auth/AuthDetails.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogin:boolean = false;
  isAdmin:boolean = false;

  constructor(private route:Router,private authdetails:AuthDetailsStoreService){}

  ngOnInit(): void {
    this.authdetails.state$
      .subscribe(data => {
        this.isLogin = data.isLogin;
        this.isAdmin = data.isAdmin;
    })
  }


  search(){
    console.log('keydown on enter')
    this.route.navigate(['/login'])
  }

}
