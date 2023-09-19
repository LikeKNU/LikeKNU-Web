import instance from "api/api"

// 함수 형식 1
export function test1() {
  console.log("안녕")
};

// 함수 형식 2
export const test2 = () => {
  console.log("안녕2");
}

// 이런식으로 api 만드시면 됩니다.
export const axiosTest3 = async() => {
  const {data} = await instance.get("/api/main/announcements");
  return data.data.body;
}
