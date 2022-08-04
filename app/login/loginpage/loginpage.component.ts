import { Component, OnInit } from '@angular/core';
import { PhpserviceService } from 'src/app/phpservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  products: any ;
  inspections :any;
  total :any;

  constructor(private dataService :PhpserviceService) { }

  ngOnInit(): void {
    this.dataService.sendGetInspectionData().subscribe((data: any) => {
      this.products = data;
      for(var i = 0; i < data.length; i++) {
        this.inspections = data[i];
        //console.log(d);
        
       // console.log('title: ' + d.title + ' ~ url: ' + d.url);
      };
      console.log(this.products);
     this.total = this.products[0].total_interventions ;
     // console.log(JSON.parse(this.products));
    })

  }

  

}
