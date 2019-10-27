import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCcs9T93fvxTEAs5XbtWHodCRTtQv7CC58",
    authDomain: "crwn-db-ebfa6.firebaseapp.com",
    databaseURL: "https://crwn-db-ebfa6.firebaseio.com",
    projectId: "crwn-db-ebfa6",
    storageBucket: "",
    messagingSenderId: "511608609275",
    appId: "1:511608609275:web:ceeb0e2b2abc5c79"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } 
        catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
    //console.log(firestore.doc('user/534dfdsfsd'))
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;