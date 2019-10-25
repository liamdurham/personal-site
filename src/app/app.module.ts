import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from  '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule }     from './app-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import * as $ from 'jquery';
import { PopUpModule } from './popup/pop-up.module';


@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, MatIconModule, RouterModule, PopUpModule ],
  declarations: [ AppComponent, BannerComponent, HomeComponent, DetailComponent, ResumeComponent, ContactComponent],
  bootstrap:    [ AppComponent ],
  providers: [],
})
export class AppModule { }
