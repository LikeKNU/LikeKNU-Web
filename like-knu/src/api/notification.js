const endpointPrefix = "/api/notifications";

export const fetchNotifications = async () => {
  /*const response = await instance.get(`${endpointPrefix}`, {
    params: {
      deviceId: getDeviceId()
    }
  });
  return response.data;*/

  return await fetch('data/notifications.json')
    .then(response => response.json());
}
