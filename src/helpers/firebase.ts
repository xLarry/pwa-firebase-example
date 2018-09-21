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

export const askForPushNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    
    console.log('firebase Token:', token);
    
    return token;
  } catch (error) {
    console.error(error);
  }
}