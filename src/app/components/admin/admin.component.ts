import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Environment } from 'src/app/environment/environment';

// interface Product_data{
//   category:string,
//   subcategory:string;
//   title:string,
//   description:string,
//   price:number,
//   imageBase64:string,
//   imageName:string
// }

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // const {title,description,price,category,subcategory,imageBase64,imageName}
  // url = "http://127.0.0.1:3000"
  // url = "https://et1in74t39.execute-api.us-east-1.amazonaws.com/Prod"
  // url = "https://doo2kb2z7sv11.cloudfront.net/Prod"

  // file_selected:File|null=null
  // response:any;
  // product_data:Product_data = {} as Product_data
  // url = this.env.Api

  // constructor(private http:HttpClient,private env:Environment){}
  // onchange(event:any){
  //   this.file_selected = event.target.files[0]
  //   this.convertToBase64(event.target.files[0])
  //     .then(data => {
  //       this.product_data.imageBase64=data
  //       this.product_data.imageName = event.target.files[0].name
  //     })
  //     .catch(err => console.log(err))
  // }
  // onsubmit(){
  //   if(this.file_selected){
  //     this.response='loading'
  //     const data = new FormData()
  //     data.append('file',this.file_selected)
  //     data.append('product_data',JSON.stringify(this.product_data))
  //     this.http.post(`${this.url}/create`,this.product_data,{ withCredentials: true }).subscribe(
  //       res=>{
  //         this.response=res
  //         console.log("result",this.response)
  //       },
  //       err=>{
  //         this.response=err
  //         console.log("error",this.response)
  //       })
  //   }
  //   else{
  //     console.log('error')
  //   }
  // }
  // submit2() {
  //   this.http.get(`${this.url}/users`,{ withCredentials: true}).subscribe(data => console.log(data),err=> console.log(err))
  // }
  // convertToBase64(file: File): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result?.toString().split(',')[1] || '');
  //     reader.onerror = error => reject(error);
  //   });
  // }
}
