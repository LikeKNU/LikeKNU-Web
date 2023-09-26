import styled from "styled-components"
import Campus from "constants/Campus"
import colors from "constants/colors"
import { getCampus, setCampus } from "utils/DeviceManageUtil"
import { useState } from "react"
import { Link, useParams } from 'react-router-dom'

export default function DropDown({changeCampus, campusName}) {
  // 이름 클릭시, 캠퍼스 세팅
  const setCampusHandler = (e) => {
    setCampus(e.target.textContent);
    // changeCampus(getCampus);
  }
  const campus = useParams();
  console.log(campus);
  return (
      <Wrapper>
        <CampusItem onClick={setCampusHandler}>
          <Link to={`/main/SINGWAN`}>{Campus.SINGWAN}</Link>
        </CampusItem>
        <Line />
        <CampusItem onClick={setCampusHandler}>
          <Link to={`/main/CHEONAN`}>{Campus.CHEONAN}</Link>
        </CampusItem>
        <Line />
        <CampusItem onClick={setCampusHandler}>
          <Link to={`/main/YESAN`}>{Campus.YESAN}</Link>
        </CampusItem>
      </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: #fff;
  list-style: none;
  z-index: 10;
  position: absolute;
  left: 16px;
  top: 60px;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid ${colors.gray200};
`
const CampusItem = styled.li`
  margin: 8px 40px;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.black};


`
const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: ${colors.gray100};
`