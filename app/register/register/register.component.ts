import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhpserviceService } from 'src/app/phpservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  UserModel:any ={
    userName : "",
    password : "",
   // type : "inspector"
  };
  error:Boolean = false;

  products:any;
  constructor(private routers: Router,private dataService:PhpserviceService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequestforlogin().subscribe((data:any)=>{
      console.log(data);
      this.products = data;
      console.log(this.products);
    }) 
  }




  onSubmit(){
    if(this.UserModel != null && this.UserModel != undefined ){
    for(let i = 0;i<this.products.length;i++){
    if((this.UserModel.userName==this.products[i].name) && (this.UserModel.password==this.products[i].password)&&((this.products[i].type =="manager")||(this.products[i].type =="Manager"))){
      alert("Login Successfull for Manager");
      this.routers.navigate(['/', 'manager']); 
    }
    else if ((this.UserModel.userName==this.products[i].name) && (this.UserModel.password == this.products[i].password)&&((this.products[i].type =="inspector")||(this.products[i].type =="Inspector"))) { 
      alert("Login Successfull for Inspector");
      this.routers.navigate(['/', 'inspector']); 
    }
  }
  }
    else{
      //handle the error to show the error message using *ngIf
       this.error = true;
       alert("Provide Correct Credentials");
       window.location.reload();
    }
  }


}
