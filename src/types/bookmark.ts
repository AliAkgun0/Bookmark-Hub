export interface Bookmark {
  id: string;
  title: string;
  url: string;
  category: string;
  favicon: string;
  createdAt: number;
}

export interface BookmarkCategory {
  name: string;
  count: number;
}
