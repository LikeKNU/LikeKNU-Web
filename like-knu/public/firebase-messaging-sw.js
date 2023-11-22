self.addEventListener("install", function (e) {
  console.log("fcm sw install..");
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm sw activate..");
});

self.addEventListener("push", function (event) {
  if (!event.data.json()) return;

  const notification = event.data.json().notification;
  let data = event.data.json().data;
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: '/logo192.png',
    data: data.announcement_url
  };

  event.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  )
});

self.addEventListener("notificationclick", function (event) {
  // TODO 푸시 알림 클릭 시 동작
  event.notification.close();
  let url = event.notification.data;
  clients.openWindow(url);
});
