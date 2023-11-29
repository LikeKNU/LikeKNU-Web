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

export async function requestPermission() {
    console.log("권한 요청 중...");

    const permission = await Notification.requestPermission();
    if (permission === "denied") {
        alert("알림 거절");
        return;
    }

    alert("알림 허용");
    const token = await getToken(messaging, {
        vapidKey: process.env.REACT_APP_FCM_VAPID,
    });

    if (token) {
        return token;
    } else {
        alert("허용 벗 토큰 없음");
    }

    /*//TODO FCM 메시지 처리
    onMessage(messaging, (payload) => {
        console.log("메시지가 도착했습니다.", payload);
        // ...
    });*/
}
