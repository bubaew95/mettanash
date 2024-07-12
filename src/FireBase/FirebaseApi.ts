import { getDocs, collection, query, where } from "firebase/firestore";
import { fireStore } from "./FirebaseConfig";

export const getChaptersApi = async (language: string) => {
  try {
    const chapterCollection = collection(fireStore, "chapter");
    const filter = query(chapterCollection, where("language", "==", language));

    const docSnap = await getDocs(filter);
    return docSnap.docs.map((item: any) => ({
      id: item.id,
      ...item.data(),
    }));
  } catch (err) {
    throw err;
  }
};
