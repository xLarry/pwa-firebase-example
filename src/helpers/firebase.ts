import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '617919859777'
  });
    
  navigator.serviceWorker
    .register('/sw.js')
    .then( (registration) => {
      firebase.messaging().useServiceWorker(registration);
    });
}