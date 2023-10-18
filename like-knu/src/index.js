import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { initializeDevice } from 'api/mainApi';
import BottomNav from 'components/globals/BottomNav';
import { BrowserRouter } from 'react-router-dom';
import {registerToken} from "./api/deviceRegister";
import {requestPermission} from "./firebaseCloudMessaging";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <BottomNav />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();
if (navigator.serviceWorker) {
    // Register the SW
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then(function(registration){
    }).catch(console.log);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
initializeDevice();
let token = await requestPermission();
console.log(token);
registerToken(token);
