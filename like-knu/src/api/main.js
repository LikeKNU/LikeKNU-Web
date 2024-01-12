import instance from "./api";
import { extractBodyFromResponse } from "./apiUtility";
const baseURL = "/api/main";

export const noticeMain = async (campus) => {
  const { data } = await instance.get(`${baseURL}/announcements`, {
    params: {
      campus: campus,
    },
  });
  console.log(data);
  return extractBodyFromResponse(data);
};

export const busMain = async (campus) => {
  const { data } = await instance.get(`${baseURL}/buses`, {
    params: {
      campus: campus,
    },
  });
  console.log(data);
  return extractBodyFromResponse(data);
};

export const menuMain = async (campus) => {
  const { data } = await instance.get(`${baseURL}/menu`, {
    params: {
      campus: campus,
    },
  });
  console.log(data);
  return extractBodyFromResponse(data);
};

export const calendarMain = async (campus) => {
  const { data } = await instance.get(`${baseURL}/schedule`, {
    params: {
      campus: campus,
    },
  });
  console.log(data);
  return extractBodyFromResponse(data);
};

export const mainHeaderMessage = async () => {
  const { data } = await instance.get(`${baseURL}/messages`);
  console.log(data);
  return extractBodyFromResponse(data);
};
