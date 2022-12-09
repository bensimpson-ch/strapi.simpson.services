import { Injectable } from '@angular/core';
import {ContentSelector} from "../domain/content-selector";
import axios from "axios";
import axiosRetry from "axios-retry";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  fetchContent(content: ContentSelector) {
    var map = content.members();
    axiosRetry(axios, {retries: 3, retryDelay: axiosRetry.exponentialDelay});
    //todo, this will have to change when there is a language selector: ?locale='+localStorage.getItem('locale')
    axios.get(environment.api + content.selector + '?locale=en')
      .then((response) => {
        map.forEach((value: boolean, key: string) => {
          map.set(key, response.data.data.attributes[key]);
        });
        content.fillMembers(map)
      });
  }
}
