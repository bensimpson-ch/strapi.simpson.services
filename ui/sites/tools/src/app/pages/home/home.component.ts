import {Component, OnInit} from '@angular/core';
import {ContentService} from "../../services/content.service";
import {HomePageContent} from "./home-page-content";
import {MarkdownModule} from "ngx-markdown";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  pageContent: HomePageContent = new HomePageContent();

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.loadContent();
  }

  private loadContent() {
    this.contentService.fetchContent(this.pageContent);
  }


}
