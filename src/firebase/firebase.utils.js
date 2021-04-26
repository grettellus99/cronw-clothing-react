import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCNxAouOmGniFne3eEm9MQGZy5wZIZLcb4",
	authDomain: "crwn-db-3f85d.firebaseapp.com",
	projectId: "crwn-db-3f85d",
	storageBucket: "crwn-db-3f85d.appspot.com",
	messagingSenderId: "497039985008",
	appId: "1:497039985008:web:202693fa52d7a0ce5f27b5",
	measurementId: "G-ZKTB1W82WG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
