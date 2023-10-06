import instance from "./api";
const baseURL = "/api/announcements";

export const notice = async(campus,category) => {
    const {data} = await instance.get(`${baseURL}/${category}`, {
        params: {
            campus: campus
        }});
    console.log(data);
    return data.data;
}