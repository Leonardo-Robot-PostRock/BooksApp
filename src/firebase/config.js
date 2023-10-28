// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAoGm2afnEPdc8E2BVyRvMEQwA9IU_7Njg',
	authDomain: 'booksapp-832cf.firebaseapp.com',
	projectId: 'booksapp-832cf',
	storageBucket: 'booksapp-832cf.appspot.com',
	messagingSenderId: '312749130859',
	appId: '1:312749130859:web:83acde04cdc28590189d2e',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirestoreDB = getFirestore(FirebaseApp);
