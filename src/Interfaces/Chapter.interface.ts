export interface ChapterRequestInterface {
  isLoading: boolean;
  item: ChapterItemInterface;
  error: null | string;
}

export interface ChaptersRequestInterface {
  isLoading: boolean;
  items: [];
  error: null | string;
}

export interface ChapterItemInterface {
  id: string;
  items: ItemsInterface[];
  text: string;
  title: string;
  language: string;
  chapter_id: string;
}

export interface ItemsInterface {
  id: string;
  text: string;
  icon: string;
}
