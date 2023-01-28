import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyACXWCEZVwyXWJ5j2TfNzR1aTAXpRYidu8',
	authDomain: 'crwn-clothing-db-85e36.firebaseapp.com',
	projectId: 'crwn-clothing-db-85e36',
	storageBucket: 'crwn-clothing-db-85e36.appspot.com',
	messagingSenderId: '1086290505695',
	appId: '1:1086290505695:web:cd55650b88a89657eb5e6a'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});

export const auth = getAuth();
export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async userAuth => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			});
		} catch (err) {}
	}

	return userDocRef;
};
