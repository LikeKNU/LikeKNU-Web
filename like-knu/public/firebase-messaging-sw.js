self.addEventListener("install", function (e) {
  console.log("fcm sw install..");
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm sw activate..");
});

self.addEventListener("push", function (event) {
  console.log("push: ", event.data.json());
  // TODO 푸시 알림 수신 시 동작
  if (!event.data.json()) return;

  const notification = event.data.json().notification;
  let data = event.data.json().data;
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: '/logo192.png',
    data: data.announcement_url
  };
  console.log("push: ", {resultData: notification, notificationTitle, notificationOptions});

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  // TODO 푸시 알림 클릭 시 동작
  console.log("notification click: ", event.notification);
  let url = event.notification.data;
  console.log("url: ", url);
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});
