import styled, {css} from "styled-components"
import colors from "constants/colors"
import Campus from "constants/Campus"
import DropDown from "components/DropDown"
import { useEffect, useState } from "react"
import {getCampus} from "utils/DeviceManageUtil"
import {ReactComponent as DownIcon} from "assets/icon/expand_more_black_24dp.svg"

export default function MainHeader() {
  const [view, setview] = useState(false);
  const [campusName, setCampusName] = useState(getCampus);
  
  const changeCampus = (campus) => {
    setCampusName(campus);
  }


  return (
    <Wrapper>
      <CampusList onClick={() => {setview(!view)}}>
        <Title $campus={campusName}>{campusName}</Title>
        {view && <DropDown changeCampus={changeCampus}/>}
      </CampusList>
      <DownIcon fill={colors.black} />

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
  display: flex;
  flex-direction: row;
`

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  margin-right: 4px;
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
