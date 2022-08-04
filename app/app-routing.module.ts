import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InspectorComponent } from './inspector/inspector/inspector.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { ManagerComponent } from './manager/manager/manager.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
//  {path : '', component : AppComponent},
//{ path: '', redirectTo: '/manager', pathMatch: 'full' }
  {path : 'manager', component : ManagerComponent},
  {path : 'inspector', component : InspectorComponent},
  {path : 'login', component: LoginpageComponent},
  {path : 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
