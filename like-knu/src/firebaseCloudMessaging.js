import {initializeApp} from "firebase/app";
import {getMessaging, getToken} from 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function requestNotificationPermission() {
  const permission = await Notification.requestPermission();
  if (permission === "denied") {
    alert("알림이 차단되어 있습니다. 설정에서 직접 알림 권한을 허용해주세요!");
    return;
  }

  const token = await getToken(messaging, {
    vapidKey: process.env.REACT_APP_FCM_VAPID,
  });

  if (token) {
    return token;
  }
}
