const config = {
    apiKey: 'AIzaSyCotCLSLzQIg7D2KbTiDvYOcdEhY-HnrMM',
    authDomain: 'recipebox-c6c22.firebaseapp.com',
    databaseURL: 'https://recipebox-c6c22.firebaseio.com',
    projectId: 'recipebox-c6c22'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();

