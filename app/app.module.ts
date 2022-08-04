import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager/manager.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { InspectorComponent } from './inspector/inspector/inspector.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { RegisterComponent } from './register/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    InspectorComponent,
    LoginpageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
