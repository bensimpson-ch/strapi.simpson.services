import {ContentSelector} from "../../domain/content-selector";

export class HomePageContent implements ContentSelector {
  selector: string = 'tools-home-page';
  overviewLabel: string | undefined;
  overview: string | undefined;

  members(): Map<string, any> {
    return new Map()
      .set('overview','overview not fetched')
      .set('overviewLabel','overviewLabel not fetched');
  }


  fillMembers(map: Map<string, any>): boolean {
    try {
      this.overviewLabel = map.get('overviewLabel');
      this.overview = map.get('overview');
    } catch (e) {
      console.log(e);
      return false;
    }
    return true;
  }

}
