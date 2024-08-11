import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiKDyB7-DdvIWXP7JF8Qy9FZoN66TJd40",
  authDomain: "personalassistant-c72ec.firebaseapp.com",
  projectId: "personalassistant-c72ec",
  storageBucket: "personalassistant-c72ec.appspot.com",
  messagingSenderId: "34078699667",
  appId: "1:34078699667:web:ba2c7d9075ea66fe5edd66"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
