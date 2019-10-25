import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from 'jquery';
declare var getObjectsFromApi:any;
declare var catContainer:any;
declare var getDetailsFromApi:any;
declare var detailContainer:any;
declare var popUpOpen:any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})


export class DetailComponent implements OnInit {
    
    apiRes: any;
    detailRes: any;
    items: any = [];
    extras: any = [];
    details: any = [];
    popUpOpen: any;
    
  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {

  }

   ngOnInit() {
    this.setList(history.state[0]);
  }
  
  
  public setList(t){
    this.apiRes = getObjectsFromApi(t);
    this.waitForResponse();
 }
  
 public waitForResponse(){
  if(catContainer !== undefined && catContainer.data.updated == 0){
    this.apiRes = catContainer;
    catContainer.data.updated = '2';
    this.sortData();
    } 
    else
    {
      setTimeout(() => {
      this.waitForResponse();
    }, 250);
   } 
  }
  
  public sortData(){
    if(this.apiRes !== undefined && this.apiRes.data.updated !== 1){
            this.items.length = 0; 
            this.extras.length = 0;
            for(var i = 0; i < Object.keys(this.apiRes.data).length - 3; i++){
                this.items.push(this.apiRes.data[i]);
            } 
            this.extras = this.apiRes.data.count;
            var arr = ["Coding", "Graphics", "UX/UI"];
            this.extras.catName = arr[this.apiRes.data.type - 1];
            this.extras.catNameNum = this.apiRes.data.count[this.apiRes.data.type];
            this.apiRes.data.updated = '1';
            return true; 
        } 
        else
        {
        setTimeout(() => {
            this.sortData();
            }, 250);
        }   
    }
    
    public showProject(proj){
        this.detailRes = getDetailsFromApi(proj.id);
        this.waitForDetails();
        this.popUpOpen = true;
    }
  
    public waitForDetails(){
    if(detailContainer !== undefined && detailContainer.data.updated == 0){
    this.detailRes = detailContainer;
    detailContainer.data.updated = '2';
    this.setDetails();
    } 
    else
     {
      setTimeout(() => {
      this.waitForDetails();
     }, 250);
    } 
   }
   
   public setDetails(){
   this.details = this.detailRes.data;
   }
   
   public closeProject(){
   this.popUpOpen = false;
   }
}
