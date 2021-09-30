import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as fbSignOut,
} from "firebase/auth";

import {app} from "./firebase";

const auth = getAuth(app);

export const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
        console.log(error);
    });
};

export const listenToUserChange = (userChange) =>
    onAuthStateChanged(auth, (user) => {
        userChange(user);
        console.log(user);
        if (user) {
            const uid = user.uid;
        } else {
        }
    });

export const signOut = () => fbSignOut(auth);
