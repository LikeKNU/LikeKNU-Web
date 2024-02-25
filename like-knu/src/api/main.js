import instance from './api';
import { extractBodyFromResponse, extractMessageFromResponse } from './apiUtility';

const baseURL = '/api/main';

export const noticeMainAPI = async (campus) => {
  const { data } = await instance.get(`${baseURL}/announcements`, {
    params: {
      campus: campus,
    },
  });
  return extractBodyFromResponse(data);
};

export const busMainAPI = async (campus) => {
  const { data } = await instance.get(`${baseURL}/buses`, {
    params: {
      campus: campus,
    },
  });
  return extractBodyFromResponse(data);
};

export const menuMainAPI = async (campus) => {
  const { data } = await instance.get(`${baseURL}/menu`, {
    params: {
      campus: campus,
    },
  });
  return extractBodyFromResponse(data);
};

export const calendarMainAPI = async (campus) => {
  const { data } = await instance.get(`${baseURL}/schedule`, {
    params: {
      campus: campus,
    },
  });
  return extractBodyFromResponse(data);
};

export const mainHeaderMessageAPI = async () => {
  const { data } = await instance.get(`${baseURL}/messages`);
  return extractMessageFromResponse(data);
};
