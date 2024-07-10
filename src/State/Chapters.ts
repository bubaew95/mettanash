import { getChaptersApi } from "../FireBase/FirebaseApi";

class ChapterApi {
  chapters = {};

  getChapters() {
    getChaptersApi("che").then((item) => {
      this.chapters = item;
    });
  }
}

export default new ChapterApi();
