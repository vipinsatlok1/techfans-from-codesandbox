// sidebar types
export interface ISidebarSingleData {
  title: string;
  Icon: any;
}

export interface ISidebar {
  title: string;
  Icon: any;
  listData: ISidebarSingleData[];
}

// tools cart types

// layoutes....
// services
// services
export interface ILayoutService {
  sidebarData: ISidebar[];
  data: ILayoutContent;
}

export interface ILayoutContent {
  isSearch: boolean;
  children: any;
  title: string;
  Icon: any;
  serviceType: string;
  onChange: () => {};
  onClick?: () => {};
  isOpen?: boolean;
}

// cards
// blog card
export interface ICardBlog {
  title: string;
  src: string;
  like: number;
  _id: string;
  category: string;
  slug: string;
}

// tool card
export interface ICardTool {
  title: string;
  like: number;
  svg: string;
  paragraph: string;
  _id: string;
  Icon: any;
  category: string;
  slug: string;
}
