import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './Guard/auth/auth.guard';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { AuthInitService } from './services/auth-init.service';
import { LoaderComponent } from './components/Utilities/loader/loader.component';
import { VerificationComponent } from './components/Auth/verification/verification.component';
import { ForgetpasswordComponent } from './components/Auth/forgetpassword/forgetpassword.component';
import { NavBarComponent } from './components/Utilities/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { SkeletonComponent } from './components/Utilities/skeleton/skeleton.component';

export function authInitializer(authInitService: AuthInitService) {
  return () => authInitService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
    VerificationComponent,
    ForgetpasswordComponent,
    NavBarComponent,
    ProductsComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'login',
        canActivate:[authGuard],
        component:LoginComponent
      },
      {
        path:'register',
        canActivate:[authGuard],
        component:RegisterComponent
      },
      {
        path:'verification',
        component:VerificationComponent
      },
      {
        path:'forgetpassword',
        component:ForgetpasswordComponent
      }
    ])
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: authInitializer,
    //   deps: [AuthInitService],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
