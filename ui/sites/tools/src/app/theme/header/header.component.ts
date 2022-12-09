import {Component, OnInit} from '@angular/core';
import {Content} from "./content";
import {ContentService} from "../../services/content.service";

const en = 'en';
const it = 'it';
const fr = 'fr';
const de = 'de';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  content: Content = new Content();

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
    if (locale.startsWith(de)) {
      locale = de
    } else if (locale.startsWith(fr)) {
      locale = fr
    } else if (locale.startsWith(it)) {
      locale = it
    } else  {
      locale = en
    }
    localStorage.setItem('locale', locale);
  }

  private loadContent() {
    this.contentService.fetchContent(this.content);

  }
}
