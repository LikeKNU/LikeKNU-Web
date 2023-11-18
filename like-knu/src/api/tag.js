import instance from "./api";

const baseURL = "/api/devices/subscribes";

export const putTag = async (data) => {
  try {
    await instance.put(`${baseURL}`, data);
  } catch (error) {
    console.log(error);
  }
};
