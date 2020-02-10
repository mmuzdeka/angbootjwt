import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { UserService } from "./user.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MMInterceptor } from './app.interceptor';
import { TokenStorage } from "./token.storage";
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService, TokenStorage, { provide: HTTP_INTERCEPTORS, useClass: MMInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
