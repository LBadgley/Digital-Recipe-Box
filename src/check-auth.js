import { auth } from './firebase.js';

auth.onAuthStateChanged(user => {
    if(!user) {
        window.location = './auth.html';
    }
});