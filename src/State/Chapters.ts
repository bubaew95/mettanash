import axios from "axios";
import { makeAutoObservable } from "mobx";
import { getChaptersApi } from "../FireBase/FirebaseApi";

class ChapterApi {
  static getChapters(arg0: string): any {
    throw new Error("Method not implemented.");
  }
  chapters = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getChapters() {
    const data = await getChaptersApi("ru");
    console.log(data);
  }
}

export default ChapterApi;
