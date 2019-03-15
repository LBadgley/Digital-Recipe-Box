const config = {
    apiKey: 'AIzaSyCotCLSLzQIg7D2KbTiDvYOcdEhY-HnrMM',
    authDomain: 'recipebox-c6c22.firebaseapp.com',
    databaseURL: 'https://recipebox-c6c22.firebaseio.com',
    projectId: 'recipebox-c6c22',
    storageBucket: 'recipebox-c6c22.appspot.com',
    messagingSenderId: '668944676411'
};
firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();

export const usersRef = db.ref('users');

export const favoritesByUserRef = db.ref('favorites-by-user');

// firebase issue showing up in QUnit tests-- but throwing a weird error involving makeHeader() fn
// firebase user login was showing up and has since stopped 
// firebase not rendering in header.. still
