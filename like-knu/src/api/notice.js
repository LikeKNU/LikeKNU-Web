import instance from './api';

const baseURL = '/api/announcements';

export const notice = async (campus, category, page, keyword) => {
  const { data } = await instance.get(`${baseURL}/${category}`, {
    params: {
      campus: campus,
      page: page,
      keyword: keyword
    },
  });
  console.log(data);
  return data.data;
};
