import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import {getStorage, ref} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBPIoj-qEYzyrTSNVbsbv4d6wiEwePw29U",
  authDomain: "audiophile-78916.firebaseapp.com",
  projectId: "audiophile-78916",
  storageBucket: "audiophile-78916.appspot.com",
  messagingSenderId: "622144712915",
  appId: "1:622144712915:web:1baf92850062e78f5c6426"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage()

export const storageRef = ref(storage)
export const imageRef = ref(storage, 'images')

export const auth = getAuth(app)

setPersistence(auth, browserSessionPersistence)

export default app