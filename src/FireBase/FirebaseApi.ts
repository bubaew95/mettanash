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

    if (false === docSnap.exists()) {
      return null;
    }

    return {
      id,
      ...docSnap.data(),
    };
  } catch (err) {
    throw err as Error;
  }
};

export const deleteChapterItem = async (id: string) => {};

export const getConversationsByChapterId = async (id: string) => {
  if (!id) {
    return null;
  }

  try {
    const conversationCollection = collection(fireStore, "conversation");
    const filter = query(conversationCollection, where("chapter_id", "==", id));

    const querySnapshot = await getDocs(filter);
    return querySnapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
  } catch (err) {
    throw err;
  }
};
