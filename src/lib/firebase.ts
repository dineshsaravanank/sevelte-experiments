// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAX_IoRgjIP3mnK3Y7eAmE0KX9zc2MGH78',
	authDomain: 'svelte-experiments-dinesh.firebaseapp.com',
	projectId: 'svelte-experiments-dinesh',
	storageBucket: 'svelte-experiments-dinesh.appspot.com',
	messagingSenderId: '63084366481',
	appId: '1:63084366481:web:839993ede217ca0eea0d30',
	measurementId: 'G-0XHGS4C8G8'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
