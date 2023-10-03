import styled from "styled-components";
import colors from "constants/colors";
import {ReactComponent as BackIcon} from "assets/icon/arrow_back_ios_new_black_24dp.svg";
import {useNavigate} from "react-router-dom";
import Campus from "../constants/Campus";
import {getCampus} from "../utils/DeviceManageUtil";

export default function BackHeader({pageName}) {
  let campus = Object.keys(Campus).find(key => Campus[key] === getCampus());
  const navigate = useNavigate();
  const goBack = () => {
    console.log("메인으로가기!!");
    navigate(`/main/${campus}`);
  }
  return (
      <Wrapper>
        <BackButton onClick={goBack}>
          <BackIcon fill={colors.black}/>
        </BackButton>
        <Text>{pageName}</Text>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  
  height: 80px;
  padding-right: 16px;
  padding-left: 16px;
  
  background-color: orange;
  border-bottom: 1px solid ${colors.gray100};
`
const BackButton = styled.button`
`
const Text = styled.div`
  color: ${colors.black};
  font-size: 2.2rem;
  font-weight: 700;
  
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`