import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import colors from 'constants/colors'
import {test1, test2, axiosTest3} from 'api/test'
import axios from 'axios'
import {BusItem} from "../components/bus/BusItem";
import Select from "react-select";
import {cityBusesRoutes} from "../api/bus";
import {getCampus} from "../utils/DeviceManageUtil";
import Campus from "../constants/Campus";
import Modal from 'react-modal'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function Test() {
  const [view, setView] = useState(false);
  const [data, setData] = useState([]);
  const [routes, setRoutes] = useState([]);
  let campus = getCampus();
  const keys = Object.keys(Campus);
  campus = keys.find((key) => Campus[key] === campus);
  // 컴포넌트 내에 axios 테스트
  const axiosTest4 = async () => {
    await axios
      .get("https://3ce0ef2e-86a4-4c2b-a1e3-a3dde60f58b3.mock.pstmn.io/api/main/announcements")
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  // 버튼을 누르면, 실행할 함수. 데이터를 받아와서 data에 저장.
  const printAxiosTest3 = async () => {
    const res = await axiosTest3();
    setData(res);
  }
  // 콘솔 출력 함수
  const print = () => {
    console.log(data);
  }

  const getRoutes = async () => {
    const res = await cityBusesRoutes(campus, "city-bus");
    setRoutes(res);
  }

  useEffect(() => {
    getRoutes();
  }, []);

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
      <div className="wrapper">
        <div className="area">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="text_area">
          <div className="text">뭐야뭐야무야</div>
          <div className="text">뭐야뭐야무야</div>
          <div className="text">뭐야뭐야무야</div>
        </div>
      </div>

      <BusItem routeCount={2} campus={"천안캠"} />
      <BusItem routeCount={3} campus={"신관캠"} />
      <BusItem routeCount={4} campus={"예산캠"} />
      <BusItem routeCount={5} campus={"천안캠"} />

      {/*<StyledSelect*/}
      {/*  options={routes}*/}
      {/*  getOptionValue={(option) => `${option['routeId']}`}*/}
      {/*  getOptionLabel={(option) => `${option['routeName']}`}*/}
      {/*/>*/}

    </Background>
  )
}
const StyledSelect = styled(Select)`
  width: 250px;
`

const Background = styled.div`
    // background-color: ${colors.common};
  
  .wrapper {
    display: flex;
    flex-direction: row;
  }
  .text_area {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .area {
    height: 50px;
    width: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .area .circle {
    border: 3px solid #E85239;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: white;
  }

  .area .line {
    height: inherit;
    width: 3px;
    background-color: #E85239;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
  }
`
