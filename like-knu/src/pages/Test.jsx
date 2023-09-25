// import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import colors from 'constants/colors'
// import {test1, test2, axiosTest3} from 'api/test'
// import axios from 'axios'
// import { getCampus } from 'utils/DeviceManageUtil'
// import { bus } from "api/main"

// export default function Test() {
//   const [view, setView] = useState(false);
//   const [data, setData] = useState([]);
//   // 컴포넌트 내에 axios 테스트
//   const axiosTest4 = async() => {
//     await axios
//       .get("https://3ce0ef2e-86a4-4c2b-a1e3-a3dde60f58b3.mock.pstmn.io/api/main/announcements")
//       .then((res) => { console.log(res)})
//       .catch((error) => {
//         console.log(error)
//       })
//   }
//   // 버튼을 누르면, 실행할 함수. 데이터를 받아와서 data에 저장.
//   const printAxiosTest3 = async() => {
//     const res = await axiosTest3();
//     setData(res);
//   }
//   // 콘솔 출력 함수
//   const print = () => {
//     console.log(data);
//   }

//   return (
//     <Background>
//       {/* <ul onClick={() => setView(!view)}>
//         안녕하세요
//         {view && <Dropdown />}
//       </ul> */}
//       <button onClick={test1}>안녕하세요1</button>
//       <button onClick={test2}>안녕하세요2</button>
//       <button onClick={printAxiosTest3}>안녕하세요3</button>
//       <button onClick={axiosTest4}>안녕하세요4</button>
//       <button onClick={print}>안녕하세요5</button>
//       {
//         data.map((d) => (
//           <div key={d.announcementId}>{d.announcementId}</div>
//         ))
//       }
//       안녕
//     </Background>
//   )
// }

// const Background = styled.div`
//   background-color: ${colors.common};
// `
import styled from "styled-components"
import CardContainer from "components/CardContainer"
import colors from "constants/colors"
import { bus } from "api/main"
import { useState, useEffect } from "react"
import MainBusItem from "components/main/MainBusItem"
import BusRefreshBtn from 'components/BusRefreshBtn'
import { getCampus } from "utils/DeviceManageUtil"

export default function MainBus() {
  const [buses, setBuses] = useState([]);
  const [campus, setCampus] = useState(getCampus());
  const getBuses = async() => {
    const res = await bus(getCampus());
    setBuses(res);
  }

  useEffect( () => {
    const storedCampus = getCampus();
    if(campus !== storedCampus) {
      setCampus(storedCampus);
    }
    console.log("ss"+storedCampus);
  });

  useEffect( () => {
    getBuses();
  },[campus]);
  return (
    <BusContainer>
      <Title>버스</Title>
      <BusRefreshBtn onClick></BusRefreshBtn>
      <BusList>
        {
          buses.map((bus) => (
            <MainBusItem key={bus.routeId} bus={bus} />
          ))
        }
      </BusList>
    </BusContainer>
  )
}

const BusContainer = styled(CardContainer)`
  grid-column: 1 / 3;
  position: relative;
  min-height: 80px;
`
const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`
const BusList = styled.div`
  display:grid;
  grid-row-gap: 1.2rem;
`