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
