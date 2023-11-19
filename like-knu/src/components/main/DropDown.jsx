import styled from "styled-components";
import { Campus } from "constants/campus";
import colors from "constants/colors";
import { getCampus, setCampus } from "utils/DeviceManageUtil";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function DropDown({ setSelectCampus }) {
  // 이름 클릭시, 캠퍼스 세팅
  const setCampusHandler = (e) => {
    setSelectCampus(e.target.textContent);
    setCampus(e.target.textContent);
    console.log("ddd");
  };
  return (
    <Wrapper>
      <CampusItem>
        <div onClick={setCampusHandler}>{Campus.SINGWAN}</div>
      </CampusItem>
      <Line />
      <CampusItem>
        <div onClick={setCampusHandler}>{Campus.CHEONAN}</div>
      </CampusItem>
      <Line />
      <CampusItem>
        <div onClick={setCampusHandler}>{Campus.YESAN}</div>
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
