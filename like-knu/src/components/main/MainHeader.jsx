import styled, { css } from "styled-components";
import colors from "constants/colors";
import DropDown from "components/main/DropDown";
import { useState } from "react";
import { getCampus } from "utils/DeviceManageUtil";
import { ReactComponent as DownIcon } from "assets/icon/expand_more_black_24dp.svg";
import { ReactComponent as NotificationIcon } from "assets/icon/bell-fill.svg";
import { ReactComponent as SettingIcon } from "assets/icon/gear-fill.svg";
import { useNavigate } from "react-router-dom";
import GlobalColor from "../styles/globalColor";
import Campus from "../../constants/campus";
import {setDeviceCampus} from "../../api/device";

export default function MainHeader() {
  const [view, setView] = useState(false);
  const [campusName, setCampusName] = useState(getCampus);
  const today = new Date();
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일 ${
    week[today.getDay()]
  }`;
  const navigate = useNavigate();
  const changeCampus = (campus) => {
    setCampusName(campus);
    GlobalColor.setColor();
  };

  const goNotification = () => {
    console.log("푸시알림 이동!!");
    navigate(`/notification`);
  };

  const goSetting = () => {
    console.log("설정 이동!!");
    navigate(`/setting`);
  };
  GlobalColor.setColor();

  return (
    <Wrapper>
      <CampusList
        onClick={() => {
          setView(!view);
        }}
      >
        <Title $campus={GlobalColor.getColor()}>{campusName}</Title>
        {view && <DropDown changeCampus={changeCampus} />}
        <DownIcon fill={colors.BLACK} />
      </CampusList>
      <DateText>{formattedDate}</DateText>
      <IconList>
        <StyledNotification onClick={goNotification} />
        <StyledSetting onClick={goSetting} />
      </IconList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 6.4rem;
  margin-bottom: 16px;
  padding: 0 16px;
  border-bottom: 1px solid ${colors.GRAY100};
  background-color: ${colors.WHITE};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
const CampusList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  margin-right: 4px;
  color: ${(props) => props.$campus};
`;
const DateText = styled.div`
  color: ${colors.GRAY400};
  font-size: 1.4rem;
  font-weight: 600;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const IconList = styled.div``;
const StyledNotification = styled(NotificationIcon)`
  width: 22px;
  height: 22px;
  color: #ffcb74;
  margin-right: 14px;
`;
const StyledSetting = styled(SettingIcon)`
  width: 22px;
  height: 22px;
  color: #7f7c7d;
`;
