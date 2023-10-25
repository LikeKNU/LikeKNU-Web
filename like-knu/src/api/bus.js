import instance from "./api";

const baseURL = "/api/buses";

export const cityBusesRoutes = async (campus, category) => {
  const {data} = await instance.get(`${baseURL}/${category}/routes`, {
    params: {
      campus: campus,
    }
  });
  console.log(data.data.body);
  return data.data.body;
}