import { Component } from '@angular/core';
import { Categories } from './models/categories';
import { Category } from './models/category.model';
import { PhpserviceService } from './phpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phpAngular';

  products: any = [];
  products1: any = [];
  category: any = {};

  model: any = {};

 


  work_At_Height: any = {};
  lifting_Operations: any = {};
  certifications: any = {};
  confined_SpaceWork: any = {};
  electric_Work: any = {};
  paperwork: any = {};
  certification_Training: any = {};
  setup: any = {};
  hot_Works: any = {};
  isolation: any = {};
  fireExits: any = {};
  awareness: any = {};
  waste_Managementt: any = {};
  product_Contamination: any = {};
  cOSHH_Asbestos: any = {};
  pPE: any = {};
  manual_Handling: any = {};
  other_Contractors: any = {};
  power_Tools: any = {};
  voltage_Detector: any = {};
  toolsUser_Purpose: any = {};
  vehicle_Condition: any = {};
  vehicle_Log_Sheet: any = {};
  vehicle_Service_Records: any = {};




  site: any;
  work_area: any;
  supervisor: any;
  Inspector: any;
  job_descriptionn: any;
  completed_by: any;
  type: any;
  date: any;
  totalInterventions: any;



  inspectionlist = new Map();





  constructor(private dataService: PhpserviceService) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any) => {
      //console.log(data);
      this.products = data;
    })


    // this.dataService.sendGetRequests().subscribe((data: any) => {
    //   // console.log(data);
    //   this.products1 = data;
    // })
  }

  // workingstandsrds:any = [];
  working_Standards = new Map();
  Quality = new Map();
  site_Rules = new Map();
  environmental = new Map();
  protection = new Map();
  tools_Cables = new Map();
  miscellaneous = new Map();
  categories = new Map();

  //const obj = this.autoConvertMapToObject(this.inspectionlist);
  onSubmit() {






    // this.working_Standards.set("work_At_Height",this.work_At_Height);
    // this.working_Standards.set("lifting_Operations",this.lifting_Operations);
    // this.working_Standards.set("certifications",this.certifications);
    // this.working_Standards.set("confined_SpaceWork",this.confined_SpaceWork);
    // this.working_Standards.set("electric_Work",this.electric_Work);

    // this.Quality.set("setup",this.setup);
    // this.Quality.set("paperwork",this.paperwork);
    // this.Quality.set("certification_Training",this.certification_Training);



    //  // console.log(this.Quality);

    //   this.site_Rules.set("hot_Works",this.hot_Works);
    //   this.site_Rules.set("isolation",this.isolation);
    //   this.site_Rules.set("fireExits",this.fireExits);
    //   this.site_Rules.set("awareness",this.awareness);




    //   this.environmental.set("waste_Managementt",this.waste_Managementt);
    //   this.environmental.set("product_Contamination",this.product_Contamination);
    //   this.environmental.set("cOSHH_Asbestos",this.cOSHH_Asbestos);



    //   this.protection.set("pPE",this.pPE);
    //   this.protection.set("manual_Handling",this.manual_Handling);
    //   this.protection.set("other_Contractors",this.other_Contractors);


    //   this.tools_Cables.set("power_Tools",this.power_Tools);
    //   this.tools_Cables.set("voltage_Detector",this.voltage_Detector);
    //   this.tools_Cables.set("toolsUser_Purpose",this.toolsUser_Purpose);

    //  // console.log(this.tools_Cables);

    //   this.miscellaneous.set("vehicle_Condition",this.vehicle_Condition);
    //   this.miscellaneous.set("vehicle_Log_Sheet",this.vehicle_Log_Sheet);
    //   this.miscellaneous.set("vehicle_Service_Records",this.vehicle_Service_Records);

    //   //  console.log(this.miscellaneous);

    //   this.categories.set("working_Standards",this.working_Standards);
    //  this.categories.set("Quality",this.Quality);
    //  this.categories.set("site_Rules",this.site_Rules);
    //  this.categories.set("environmental",this.environmental);
    //    this.categories.set("protection",this.protection);
    //     this.categories.set("tools_Cables",this.tools_Cables);
    //       this.categories.set("miscellaneous",this.miscellaneous);

    //  // console.log("this.categories",JSON.stringify(Array.from(this.categories)));


    //   this.inspectionlist.set("site",this.site);
    //       this.inspectionlist.set("work_area",this.work_area);
    //       this.inspectionlist.set("supervisor",this.supervisor);
    //     this.inspectionlist.set("Inspector",this.Inspector);
    //       this.inspectionlist.set("job_descriptionn",this.job_descriptionn);
    //         this.inspectionlist.set("completed_by",this.completed_by);
    //           this.inspectionlist.set("type",this.type);
    //             this.inspectionlist.set("date",this.date);
    //               this.inspectionlist.set("totalInterventions",this.totalInterventions);
    //               this.inspectionlist.set("categories",this.categories);

    //console.log("this.inspectionlist",this.inspectionlist);






    //const obj = Object.fromEntries(this.inspectionlist);





    const working_Standardss = {
      work_At_Height: this.work_At_Height,
      lifting_Operations: this.lifting_Operations,
      certifications: this.certifications,
      confined_SpaceWork: this.confined_SpaceWork,
      electric_Work: this.electric_Work
    };

    const quality = {
      setup: this.setup,
      paperwork: this.paperwork,
      certification_Training: this.certification_Training,
    };

    const siteRules = {
      hot_Works: this.hot_Works,
      isolation: this.isolation,
      fireExits: this.fireExits,
      awareness: this.awareness
    }

    const environmentals = {
      waste_Managementt: this.waste_Managementt,
      product_Contamination: this.product_Contamination,
      cOSHH_Asbestos: this.cOSHH_Asbestos
    }

    const protections = {
      pPE: this.pPE,
      manual_Handling: this.manual_Handling,
      other_Contractors: this.other_Contractors
    }


    const toolsCables = {
      power_Tools: this.power_Tools,
      voltage_Detector: this.voltage_Detector,
      toolsUser_Purpose: this.toolsUser_Purpose
    }

    // console.log(this.tools_Cables);

    const miscellaneouss = {
      vehicle_Condition: this.vehicle_Condition,
      vehicle_Log_Sheet: this.vehicle_Log_Sheet,
      vehicle_Service_Records: this.vehicle_Service_Records
    }

    const workingstandarsList = [];
    const qualityList = [];
    const siteRulesList = [];
    const environmentalsList = [];
    const protectionsList = [];
    const toolsCablesList = [];
    const miscellaneoussList = [];



    workingstandarsList.push(working_Standardss);
    qualityList.push(quality);
    siteRulesList.push(siteRules);
    environmentalsList.push(environmentals);
    protectionsList.push(protections);
    toolsCablesList.push(toolsCables);
    miscellaneoussList.push(miscellaneouss);

    const categoeirs = [{
      working_Standards: workingstandarsList,
      Quality: qualityList,
      site_Rules: siteRulesList,
      environmental: environmentalsList,
      protection: protectionsList,
      tools_Cables: toolsCablesList,
      miscellaneous: miscellaneoussList
    }];





    const inspectionlist = [{
      site: this.site,
      work_area: this.work_area,
      supervisor: this.supervisor,
      Inspector: this.Inspector,
      job_descriptionn: this.job_descriptionn,
      completed_by: this.completed_by,
      type: this.type,
      date: this.date,
      //total_interventions: this.total_interventions,
      total_interventions: "5",
      categories: categoeirs
    }];


    const result = JSON.stringify({inspectionlist});

   // console.log(result);


           var data = document.getElementById("1")?.innerText;
           console.log(data);
           
 

     





  //  // this.dataService.addInspectionReportRequests(result).subscribe((data:any)=>
  //   {
  //     console.log("Created Successfully");
  //   });




  }


}
