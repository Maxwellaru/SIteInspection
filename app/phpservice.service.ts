import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PhpserviceService {

  id:any;

  getid(ab: any) {
   this.id = ab;
  }

   
  
 

  private REST_API_SERVER = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    })
  }

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER+"/api/customers");
  }

  public sendGetRequests(){
    return this.httpClient.get(this.REST_API_SERVER+"/api/inspectors");
  }

  public sendaddRequests(model:any){
    return this.httpClient.post(this.REST_API_SERVER+"/api/inspector/add", model);
  }

  sendGetRequestforlogin() {
    return this.httpClient.get(this.REST_API_SERVER+"/api/users");
  }




  sendGetInspectionData() {
    return this.httpClient.get(this.REST_API_SERVER+"/api/inspectors/"+this.id);
  }



 
  
  public sendaddRequestss(model:any){
    //console.log("In Service Layer"+ model);
    return this.httpClient.post(this.REST_API_SERVER+"/api/inspectors/add",model,{ ...this.httpOptions, responseType: 'text' })
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }


 public addInspectionReportRequests(model:any){
  return this.httpClient.post(this.REST_API_SERVER+"/api/inspectorlist/add", model,{ ...this.httpOptions, responseType: 'text' }).pipe(
    catchError(this.errorHandlers)
  )
}  

errorHandlers(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
}



