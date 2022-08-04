import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhpserviceService } from 'src/app/phpservice.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  products:any = [];
  products1:any = [];
  model:any = {};
  @Input() id= Number;

  constructor(private dataService: PhpserviceService,private routers: Router) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data:any)=>{
      //console.log(data);
      this.products = data;
    }) 
    
   
  }


  ongetData(ab:any){
    this.id = ab;
    this.dataService.getid(ab);
    console.log(this.id);
    this.routers.navigate(['/', 'login']); 
  }

  onSubmit(){
    
   // this.model.idTable_one = 9;
   // console.log(this.model);
    let jsonModel = JSON.stringify(this.model);
   // console.log(jsonModel);
   
    this.dataService.sendaddRequestss(jsonModel).subscribe((data:any)=>{
     // console.log(JSON.stringify(data));
    if(data!= null && data != undefined)
    {
      alert("Inspector Successfully");
      window.location.reload();
    }
    else{
      alert("Data Not added");
    }
    
    });

  }
  
}
