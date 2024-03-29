import instance from './api';
import { extractBodyFromResponse } from './apiUtility';

const baseURL = '/api/buses';

export const shuttleBusesRoutes = async (campus) => {
  const { data } = await instance.get(`${baseURL}/shuttle-bus/routes`, {
    params: {
      campus: campus,
    },
  });
  return extractBodyFromResponse(data);
};

export const shuttleBuses = async (shuttleId) => {
  const { data } = await instance.get(`${baseURL}/shuttle-bus/${shuttleId}`);
  return extractBodyFromResponse(data);
};

export const cityBuses = async (campus, type, refresh) => {
  const { data } = await instance.get(`${baseURL}/city-bus/${type}`, {
    params: {
      campus: campus,
      isRefresh: refresh
    },
  });
  return extractBodyFromResponse(data);
};
