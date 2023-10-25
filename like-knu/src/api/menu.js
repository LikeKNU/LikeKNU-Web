import instance from "./api";

const baseURL = "/api/menu"

export const menu = async (campus) => {
  const {data} = await instance.get(`${baseURL}`, {
    params: {
      campus: campus,
    }
  });
  console.log(data);
  return data.data.body;
}

