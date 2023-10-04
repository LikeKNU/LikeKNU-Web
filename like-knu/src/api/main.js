import instance from "./api";
const baseURL = "/api/main";

export const notice = async(campus) => {
  const {data} = await instance.get(`${baseURL}/announcements`, {
    params: {
      campus: campus
    }});
  console.log(data);
  return data.data.body;
}

export const bus = async(campus) => {
  const {data} = await instance.get(`${baseURL}/buses`, {
    params: {
        campus: campus
    }});
  console.log(data);
  return data.data.body;
}

export const menu = async(campus) => {
  const {data} = await instance.get(`${baseURL}/menu`, {
    params: {
      campus: campus
    }});
  console.log(data);
  return data.data.body;
}

export const calendar = async(campus) => {
  const {data} = await instance.get(`${baseURL}/schedule` ,{
    params: {
      campus: campus
    }});
  console.log(data);
  return data.data.body;
}