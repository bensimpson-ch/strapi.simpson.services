import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MarkdownModule} from "ngx-markdown";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule
  ]
})
export class PagesModule { }
