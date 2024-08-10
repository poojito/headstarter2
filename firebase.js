
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyBtZN-uhuBigEFsAb7ynA9EBlRRoyfdKvo",
 authDomain: "headstarter2-9f4d1.firebaseapp.com",
 projectId: "headstarter2-9f4d1",
 storageBucket: "headstarter2-9f4d1.appspot.com",
 messagingSenderId: "253387552090",
 appId: "G-XEKVLLLSJH"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };