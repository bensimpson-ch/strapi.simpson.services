import {ContentSelector} from "../../domain/content-selector";

export class HeaderContent implements ContentSelector {
  selector: string = 'tools-theme';
  brand: string | undefined;

  members(): Map<string, any> {
    return new Map()
      .set('brand','brand not fetched');
  }


  fillMembers(map: Map<string, any>): boolean {
    try {
      this.brand = map.get('brand');
    } catch (e) {
      console.log(e);
      return false;
    }
    return true;
  }

}
