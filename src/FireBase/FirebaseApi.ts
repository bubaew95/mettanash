import {
  getDocs,
  setDoc,
  doc,
  collection,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { fireStore } from "./FirebaseConfig";

async function addChapters() {
  const citiesRef = collection(fireStore, "chapter");
  chapters.map(async (item, index) => {
    return await setDoc(doc(citiesRef, `chapter_${index + 1}`), {
      title: item,
      text: "",
    });
  });
}

async function addItems() {
  const citiesRef = collection(fireStore, "conversation");
  Object.keys(items).map(async (item) => {
    const data = items[item];

    return data.map(async (subItem) => {
      return await setDoc(doc(citiesRef), {
        ...subItem,
        chapter_id: item,
      });
    });
  });
}

async function findOne() {
  const citiesRef = collection(fireStore, "chapter");
  const r = await getDoc(doc(citiesRef, "chapter_1"));
}

async function innerJoin() {
  const citiesRef = collection(fireStore, "conversation");
  const mQuery = query(citiesRef, where("chapter_id", "==", "chapter_1"));
  const querySnapshot = await getDocs(mQuery);

  // querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  // });

  // console.log("result", querySnapshot.docs);
}

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

export const getChapterByIdApi = async (id) => {
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
