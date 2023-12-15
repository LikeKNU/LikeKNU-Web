import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "assets/icon/home_black_24dp.svg";
import { ReactComponent as BusIcon } from "assets/icon/directions_bus_black_24dp.svg";
import { ReactComponent as AssignmentIcon } from "assets/icon/assignment_black_24dp.svg";
import { ReactComponent as CalendarIcon } from "assets/icon/calendar_today_black_24dp.svg";
import { ReactComponent as RestaurantIcon } from "assets/icon/restaurant_black_24dp.svg";
import colors from "constants/colors";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGE_NAME } from "../../constants/pageName";

export default function BottomNav({ isAndroid }) {
  const [activeNav, setActiveNav] = useState(1);
  let pathName = useLocation().pathname;
  const navigate = useNavigate();
  const goDetailPage = (url, value) => {
    if (activeNav === 1 && value === 1) {
      console.log("메인에서 메인으로 이동하려 함.");
    } else {
      navigate(url);
      setActiveNav(value);
    }
  };
  useEffect(() => {
    if (pathName.includes("/notice")) {
      setActiveNav(2);
    } else if (pathName.includes("/bus")) {
      setActiveNav(3);
    } else if (pathName.includes("/menu")) {
      setActiveNav(4);
    } else if (pathName.includes("/calendar")) {
      setActiveNav(5);
    } else {
      setActiveNav(1);
    }
  }, [pathName]);

  return (
    <Wrapper isAndroid={isAndroid}>
      <ButtonItem onClick={() => goDetailPage(`/`, 1)}>
        <HomeIcon
          className={activeNav === 1 ? "icon_style icon_active" : "icon_style"}
        />
        <Text className={activeNav === 1 ? "text_active" : null}>
          {PAGE_NAME.MAIN}
        </Text>
      </ButtonItem>
      <ButtonItem onClick={() => goDetailPage(`/notice`, 2)}>
        <AssignmentIcon
          className={activeNav === 2 ? "icon_style icon_active" : "icon_style"}
        />
        <Text className={activeNav === 2 ? "text_active" : null}>
          {PAGE_NAME.NOTICE}
        </Text>
      </ButtonItem>
      <ButtonItem onClick={() => goDetailPage(`/bus`, 3)}>
        <BusIcon
          className={activeNav === 3 ? "icon_style icon_active" : "icon_style"}
        />
        <Text className={activeNav === 3 ? "text_active" : null}>
          {PAGE_NAME.BUS}
        </Text>
      </ButtonItem>
      <ButtonItem onClick={() => goDetailPage(`/menu`, 4)}>
        <RestaurantIcon
          className={activeNav === 4 ? "icon_style icon_active" : "icon_style"}
        />
        <Text className={activeNav === 4 ? "text_active" : null}>
          {PAGE_NAME.MENU}
        </Text>
      </ButtonItem>
      <ButtonItem onClick={() => goDetailPage(`/calendar`, 5)}>
        <CalendarIcon
          className={activeNav === 5 ? "icon_style icon_active" : "icon_style"}
        />
        <Text className={activeNav === 5 ? "text_active" : null}>
          {PAGE_NAME.CALENDAR}
        </Text>
      </ButtonItem>
    </Wrapper>
  );
}

// nav 전체
const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
  padding: 12px 16px 28px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  border-top: 1px solid ${colors.GRAY100};
  background-color: ${colors.WHITE};
  height: ${(props) => (props.isAndroid ? "50px" : "90px")};
`;

// 각 아이템
const ButtonItem = styled.div`
  height: 100%;
  width: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  // 아이콘 크기 조절
  .icon_style {
    width: 22px;
    height: 22px;
    margin-bottom: 4px;
    fill: ${colors.GRAY350};
  }

  .icon_active {
    fill: ${colors.COMMON};
  }

  .text_active {
    color: ${colors.COMMON};
  }
`;

// 글자
const Text = styled.div`
  color: ${colors.GRAY350};
  font-size: 1.2rem;
  font-weight: 600;
`;
