self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
});

self.addEventListener('push', function (event) {
  if (!event.data.json()) return;

  const notification = event.data.json().notification;
  let data = event.data.json().data;
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: '/logo192.png',
    data: data.url
  };

  event.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  )
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  let url = event.notification.data;
  clients.openWindow(url);
});
