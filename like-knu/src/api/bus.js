import instance from "./api";
import { extractBodyFromResponse } from "./apiUtility";

const baseURL = "/api/buses";

export const shuttleBusesRoutes = async (campus) => {
  const { data } = await instance.get(`${baseURL}/shuttle-bus/routes`, {
    params: {
      campus: campus,
    },
  });
  console.log(data.data.body);
  return extractBodyFromResponse(data);
};
export const shuttleBuses = async (shuttleId) => {
  const { data } = await instance.get(`${baseURL}/shuttle-bus/${shuttleId}`);
  console.log(data.data.body);
  return extractBodyFromResponse(data);
};

export const cityBuses = async (campus, type) => {
  const { data } = await instance.get(`${baseURL}/city-bus/${type}`, {
    params: {
      campus: campus,
    },
  });
  console.log(data.data.body);
  return extractBodyFromResponse(data);
};
