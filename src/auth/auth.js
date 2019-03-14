import loadHeader from '../header-component.js';
import { auth } from '../firebase.js';

const options = { skipAuth: true };
loadHeader(options);

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    //where to go on successsful signin
    signInSuccessUrl: './' + window.location.hash,
    //dont show google account chooser
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
});