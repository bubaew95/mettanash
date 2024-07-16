import {
  getDocs,
  doc,
  collection,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { fireStore } from "./FirebaseConfig";

export const getChaptersApi = async (language: string) => {
  try {
    const chapterCollection = collection(fireStore, "chapter");
    const filter = query(chapterCollection, where("language", "==", language));

    const docSnap = await getDocs(filter);
    return docSnap.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
  } catch (err) {
    throw err;
  }
};

export const getChapterByIdApi = async (id: string) => {
  try {
    const chapterCollection = collection(fireStore, "chapter");
    const docSnap = await getDoc(doc(chapterCollection, id));
    return docSnap.data();
  } catch (err) {
    throw err;
  }
};

const getConversations = async (ids) => {
  if (!ids) {
    return;
  }

  try {
    const conversationCollection = collection(fireStore, "conversation");
    const filter = query(
      conversationCollection,
      where("chapter_id", "in", ids)
    );

    const querySnapshot = await getDocs(filter);
    return querySnapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
  } catch (err) {
    throw err;
  }
};

export const SynchronizationDataBase = async (dataBase, settings = null) => {
  try {
    if (null === settings) {
      settings = await dataBase.DbGetSettings();
    }

    const chapters = await getChaptersApi(settings.language);
    await dataBase.DbInsertChapters(chapters);

    const conversations = await getConversations(
      chapters.map((item) => item.id).flat()
    );

    await dataBase.DbInsertConversations(conversations);
    await dataBase.DbInsertOrUpdateSettings({
      lastDateSync: unixTime + 3600 * 24 * 7,
    });

    return chapters;
  } catch (err) {
    throw err;
  }
};
