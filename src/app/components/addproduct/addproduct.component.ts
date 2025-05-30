import { Component, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Environment } from 'src/app/environment/environment';
import { Subject, takeUntil } from 'rxjs';

interface Product_data{
  category:string,
  subcategory:string;
  title:string,
  description:string,
  price:number,
  imageBase64:string,
  imageName:string
}

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnDestroy {

  file_selected:File|null=null
    response:any;
    product_data:Product_data = {} as Product_data
    url = this.env.Api

    private destroy$ = new Subject<void>();

    constructor(private http:HttpClient,private env:Environment){}

    ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    // this.loading.dispatch(SetLoading({isLoading:false}))
  }

    onchange(event:any){
      this.file_selected = event.target.files[0]
      this.convertToBase64(event.target.files[0])
        .then(data => {
          this.product_data.imageBase64=data
          this.product_data.imageName = event.target.files[0].name
        })
        .catch(err => console.log(err))
    }

  onsubmit(){
    if(this.file_selected){
      this.response='loading'
      const data = new FormData()
      data.append('file',this.file_selected)
      data.append('product_data',JSON.stringify(this.product_data))
      this.http.post(`${this.url}/create`,this.product_data,{ withCredentials: true }).pipe(takeUntil(this.destroy$))
      .subscribe(
        res=>{
          this.response=res
          console.log("result",this.response)
        },
        err=>{
          this.response=err
          console.log("error",this.response)
        })
    }
    else{
      console.log('error')
    }
  }

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString().split(',')[1] || '');
      reader.onerror = error => reject(error);
    });
  }

}
