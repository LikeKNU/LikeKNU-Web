import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import colors from 'constants/colors'
import {test1, test2, axiosTest3} from 'api/test'
import axios from 'axios'
function Dropdown() {
  return(
    <div>
      <li>천안</li>
      <li>신관</li>
      <li>예산</li>
    </div>
  )
}
export default function Test() {
  const [view, setView] = useState(false);
  const [data, setData] = useState([]);
  // 컴포넌트 내에 axios 테스트
  const axiosTest4 = async() => {
    await axios
      .get("https://3ce0ef2e-86a4-4c2b-a1e3-a3dde60f58b3.mock.pstmn.io/api/main/announcements")
      .then((res) => { console.log(res)})
      .catch((error) => {
        console.log(error)
      })
  }
  // 버튼을 누르면, 실행할 함수. 데이터를 받아와서 data에 저장.
  const printAxiosTest3 = async() => {
    const res = await axiosTest3();
    setData(res);
  }
  // 콘솔 출력 함수
  const print = () => {
    console.log(data);
  }
  return (
    <Background>
      {/* <ul onClick={() => setView(!view)}>
        안녕하세요
        {view && <Dropdown />}
      </ul> */}
      <button onClick={test1}>안녕하세요1</button>
      <button onClick={test2}>안녕하세요2</button>
      <button onClick={printAxiosTest3}>안녕하세요3</button>
      <button onClick={axiosTest4}>안녕하세요4</button>
      <button onClick={print}>안녕하세요5</button>
      {
        data.map((d) => (
          <div key={d.announcementId}>{d.announcementId}</div>
        ))
      }
      안녕
    </Background>
  )
}

const Background = styled.div`
  background-color: ${colors.common};
`
