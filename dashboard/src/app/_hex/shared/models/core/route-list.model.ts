export interface iiRouteList {
  title: string;
  link: string;
  icon?: string;
  permission?: number[];
  children?: iiRouteList[];
  root?: boolean;
  hidden?: true;
}
