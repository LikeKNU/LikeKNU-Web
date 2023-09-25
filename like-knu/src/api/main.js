import instance from "./api";

const baseURL = "/api/main";

export const notice = async() => {
  const {data} = await instance.get(`${baseURL}/announcements`);
  console.log(data);
  return data.data.body;
}

export const bus = async() => {
  const {data} = await instance.get(`${baseURL}/buses`);
  console.log(data);
  return data.data.body;
}

export const menu = async() => {
  const {data} = await instance.get(`${baseURL}/menu`);
  console.log(data);
  return data.data.body;
}

export const calendar = async(campus) => {
  const {data} = await instance.get(`${baseURL}/schedule`, {
    params: {
        campus: campus
    }
});
  console.log(data);
  return data.data.body;
}