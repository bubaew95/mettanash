import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

interface FireBaseConfigInterface {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FireBaseConfigInterface = {
  apiKey: import.meta.env.apiKey as string,
  authDomain: import.meta.env.authDomain as string,
  projectId: import.meta.env.projectId as string,
  storageBucket: import.meta.env.storageBucket as string,
  messagingSenderId: import.meta.env.messagingSenderId as string,
  appId: import.meta.env.appId as string,
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);

export { app, fireStore };
