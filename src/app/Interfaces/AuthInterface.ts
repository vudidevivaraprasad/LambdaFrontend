export interface Auth{
  message:string
}

export interface Message{
  message:string
}

export interface RegisterAuth{
  message:string,
  token?:string
}

export interface User{
  isLogin:boolean,
  isAdmin:boolean
}

export interface Loading{
  isLoading:boolean
}

export interface Login{
  mail:string,
  password:string
}

export interface Register{
  mail:string,
  password:string,
  confirmpassword:string
}

export interface ForgetpasswordToken{
  mail:string
}


export interface ForgetpasswordTokenResult{
  token?:string,
  message:string
}

export interface ForgetPassword{
  token:string | null,
  newpassword:string
}

export interface ForgetPasswordResult{
  message:string
}

export interface Cart{
  items:Product[]
}

export interface CartFromBackend{
  result:string[]
}

export interface WishlistFromBackend{
  result:string[]
}

export interface AddressFromBackend{
  result:Address[]
}

export interface AllProducts{
  result: Product[]
}

export interface OneProduct{
  result:Product
}

export interface Product{
  "image": string,
  "createdAt": number,
  "price": number,
  "description": string,
  "id": string,
  "title": string,
  "category": string,
  "subcategory": string,
  "updatedAt": number
}

export interface Wishlist{
  items: Product[]
}

export interface AddressList{
  items: Address[]
}

export interface Address{
  id:number,
  name:string,
  mobilenumber:number,
  pincode:number,
  state:string,
  city:string,
  village:string,
  area?:string
}

export interface UserDetails{
  data:{
    address:Address[],
    wishlist:string[],
    cart:string[]
  }
}
