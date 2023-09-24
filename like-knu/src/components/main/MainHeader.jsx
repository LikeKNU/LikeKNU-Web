import styled, {css} from "styled-components"
import colors from "constants/colors"
import Campus from "constants/Campus"
import DropDown from "components/DropDown"
import { useEffect, useState } from "react"
import {getCampus, setCampus} from "utils/DeviceManageUtil"
import {initializeDevice} from "api/MainApi"

export default function MainHeader() {
  const [view, setview] = useState(false);
  const [campusName, setCampusName] = useState("");
  useEffect(() => {
    initializeDevice();
    setCampusName(getCampus);
  },[]);
  return (
    <Wrapper>
      <CampusList onClick={() => {setview(!view)}}>
        <Title $campus={campusName}>{campusName}</Title>
        {view && <DropDown campus={campusName}/>}
      </CampusList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 6.4rem;
  margin-bottom: 16px;
  padding: 0px 16px;
`
const CampusList = styled.ul`
  padding: 0;

`
const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 700;

  ${(props) => {
    switch (props.$campus) {
      case "천안캠":
        return css`
          color: ${colors.cheonAn};
        `
      case "신관캠":
        return css`
          color: ${colors.sinGwan};
        `
      case "예산캠":
        return css`
          color: ${colors.yeSan};
        `
      default:
        return css`
          color: ${colors.common};
        `
    }
  }}
`
