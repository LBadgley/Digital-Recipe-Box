import { auth, usersRef } from '../firebase.js';
import loadHeader from '../header-component.js';

const options = { skipAuth: true };
loadHeader(options);

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    //where to go on successful sign-in
    signInSuccessUrl: './' + window.location.hash,
    //dont show google account chooser
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    // callbacks ...
    callbacks: {
        signInSuccessWithAuthResult(authResult) {
            const user = authResult.user;
            usersRef.child(user.uid)
                .set({ 
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });
            return true;
        }
    }
});