import instance from "./api";
const baseURL = "/api/main";

export const noticeMain = async(campus) => {
  const {data} = await instance.get(`${baseURL}/announcements`, {
    params: {
      campus: campus
    }});
  console.log(data);
  return data.data.body;
}

export const busMain = async(campus) => {
  const {data} = await instance.get(`${baseURL}/buses`, {
    params: {
        campus: campus
    }});
  console.log(data);
  return data.data.body;
}

export const menuMain = async(campus) => {
  const {data} = await instance.get(`${baseURL}/menu`, {
    params: {
      campus: campus
    }});
  console.log(data);
  return data.data.body;
}

export const calendarMain = async(campus) => {
  const {data} = await instance.get(`${baseURL}/schedule` ,{
    params: {
      campus: campus
    }});
  console.log(data);
  return data.data.body;
}