import styled from "styled-components";
import Campus from "constants/campus";
import colors from "constants/colors";
import { getCampus, setCampus } from "utils/DeviceManageUtil";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {setDeviceCampus} from "../../api/device";
export default function DropDown({ changeCampus, campusName }) {
  // 이름 클릭시, 캠퍼스 세팅
  const setCampusHandler = (e) => {
    setCampus(e.target.textContent);
    let selectedCampus = getCampus();
    changeCampus(selectedCampus);
    const keys = Object.keys(Campus);
    let selectCampus = keys.find((key) => Campus[key] === selectedCampus);
    setDeviceCampus(selectCampus);
  };
  const campus = useParams();
  console.log(campus);
  return (
    <Wrapper>
      <CampusItem>
        <StyledLink to={`/main/SINGWAN`} onClick={setCampusHandler}>
          {Campus.SINGWAN}
        </StyledLink>
      </CampusItem>
      <Line />
      <CampusItem>
        <StyledLink to={`/main/CHEONAN`} onClick={setCampusHandler}>
          {Campus.CHEONAN}
        </StyledLink>
      </CampusItem>
      <Line />
      <CampusItem>
        <StyledLink to={`/main/YESAN`} onClick={setCampusHandler}>
          {Campus.YESAN}
        </StyledLink>
      </CampusItem>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #fff;
  list-style: none;
  z-index: 10;
  position: absolute;
  left: 16px;
  top: 55px;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid ${colors.GRAY200};
`;
const CampusItem = styled.li`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.BLACK};
  // box-sizing: border-box;
`;
const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: ${colors.GRAY100};
`;
const StyledLink = styled(Link)`
  padding: 8px 40px;
  display: inline-block;
`;
