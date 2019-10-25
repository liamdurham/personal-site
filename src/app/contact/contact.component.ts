import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material';
declare var navigator:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit { 
   
  isEventVisible = false;
   
  constructor() { }

  ngOnInit() {
  }
  
  public copyEmail() {
  navigator.clipboard.writeText("liam.durham@yahoo.com");
  window.alert("Email Copied!\nHope to hear from you soon!");
  }
}