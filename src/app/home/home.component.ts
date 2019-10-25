import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';
declare var getObjectsFromApi:any;
import * as $ from 'jquery';
declare var catContainer:any;
declare var extra:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    apiRes: any;
    extras: any = [];

  ngOnInit(){
  this.apiRes = getObjectsFromApi(1);
  this.waitForResponse();
 }
  
 public waitForResponse(){
  if(catContainer !== undefined && catContainer.data.updated == 0){
    this.apiRes = catContainer;
    catContainer.data.updated = '1';
    this.extras = this.apiRes.data.count;
    } 
    else
    {
      setTimeout(() => {
      this.waitForResponse();
    }, 250);
   } 
  }
  
  constructor() 
  {}
  

  
  
}