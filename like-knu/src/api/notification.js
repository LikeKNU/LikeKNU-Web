const endpointPrefix = "/api/notifications";

export const fetchNotifications = async (page) => {
  /*const response = await instance.get(`${endpointPrefix}`, {
    params: {
      deviceId: getDeviceId()
    }
  });
  return response.data;*/

  if (page === 1) {
    return await fetch('data/notifications.json')
      .then(response => response.json());
  }

  return await fetch('data/notifications1.json')
    .then(response => response.json());
}
