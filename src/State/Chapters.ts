import { observable, action, makeObservable } from "mobx";
import { getChaptersApi } from "../FireBase/FirebaseApi";

class ChapterApi {
  chapters = {};

  constructor() {
    makeObservable(this, {
      chapters: observable,
      getChapters: action,
    });
  }

  getChapters() {
    getChaptersApi("che").then((item) => {
      this.chapters = item;
    });
  }
}

export default new ChapterApi();
