export interface ContentSelector {
  selector: string | undefined;
  fillMembers(map: Map<string, any>): boolean;
  members(): Map<string, any>;
}
