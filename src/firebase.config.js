import { getApp, getApps, initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import {getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCm2_5O0_PWR9kACtNS1A4jkgsTwZEbcLc",
    authDomain: "food-delivery-app-977d4.firebaseapp.com",
    databaseURL: "https://food-delivery-app-977d4-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-977d4",
    storageBucket: "food-delivery-app-977d4.appspot.com",
    messagingSenderId: "1005560864004",
    appId: "1:1005560864004:web:713ae1d0d47641dfa70451"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage};