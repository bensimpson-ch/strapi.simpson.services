import {Component, OnInit} from '@angular/core';
import {HeaderContent} from "./header-content";
import {ContentService} from "../../services/content.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  content: HeaderContent = new HeaderContent();

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.determineLocale();
    this.loadContent();
  }
  private determineLocale() {
    var locale = localStorage.getItem('locale');
    if (locale === null) {
      locale = navigator.language;
    }
    if (locale.length > 2) {
      locale = locale.substring(0,2);
    }
    localStorage.setItem('locale', locale);
  }

  private loadContent() {
    this.contentService.fetchContent(this.content);
  }
}
