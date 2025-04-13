import { Component, OnInit } from '@angular/core';
import LoadingDetailsStoreService from 'src/app/ReduxStore/Loading/LoadingDetails.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  isLoading!:boolean;
  constructor(private loading:LoadingDetailsStoreService){
    this.loading.state$.subscribe(data => this.isLoading=data.isLoading)
  }
  ngOnInit(): void {
  }
}
