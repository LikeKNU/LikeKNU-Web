import instance from "./api";
import { extractBodyFromResponse } from "./apiUtility";

const baseURL = "/api/schedule";

export const calendar = async () => {
  const { data } = await instance.get(`${baseURL}`);
  //TODO then이랑 catch 처리하기
  console.log(data);
  return extractBodyFromResponse(data);
};
