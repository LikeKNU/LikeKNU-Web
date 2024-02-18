import { ReactComponent as AssignmentIcon } from 'assets/icon/assignment_black_24dp.svg';
import { ReactComponent as CalendarIcon } from 'assets/icon/calendar_today_black_24dp.svg';
import { ReactComponent as BusIcon } from 'assets/icon/directions_bus_black_24dp.svg';
import { ReactComponent as HomeIcon } from 'assets/icon/home_black_24dp.svg';
import { ReactComponent as RestaurantIcon } from 'assets/icon/restaurant_black_24dp.svg';
import colors, { campusColors } from 'constants/colors';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PAGE_NAME } from '../../constants/pageName';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import GlobalColor from '../styles/globalColor';

export default function BottomNav({ isAndroid, selectedCampus }) {
  const [activeNav, setActiveNav] = useState(1);
  const [color, setColor] = useState(GlobalColor.getColor())

  let pathName = useLocation().pathname;
  const navigate = useNavigate();
  const goDetailPage = (url, value) => {
    if (activeNav === 1 && value === 1) {
      console.log('메인에서 메인으로 이동하려 함.');
    } else {
      navigate(url);
      setActiveNav(value);
    }
  };
  useEffect(() => {
    if (pathName.includes('/notice')) {
      setActiveNav(2);
    } else if (pathName.includes('/bus')) {
      setActiveNav(3);
    } else if (pathName.includes('/menu')) {
      setActiveNav(4);
    } else if (pathName.includes('/calendar')) {
      setActiveNav(5);
    } else {
      setActiveNav(1);
    }
  }, [pathName]);

  useEffect(() => {
    setColor(campusColors[selectedCampus]);
  }, [selectedCampus]);

  return (
    <Wrapper isAndroid={isAndroid}>
      <ButtonItem campusColor={color} onClick={() => goDetailPage(`/`, 1)}>
        <HomeIcon
          className={activeNav === 1 ? 'icon_style icon_active' : 'icon_style'}
        />
        <Text className={activeNav === 1 ? 'text_active' : null}>
          {PAGE_NAME.MAIN}
        </Text>
      </ButtonItem>
      <ButtonItem campusColor={color} onClick={() => goDetailPage(`/notice`, 2)}>
        <AssignmentIcon
          className={activeNav === 2 ? 'icon_style icon_active' : 'icon_style'}
        />
        <Text className={activeNav === 2 ? 'text_active' : null}>
          {PAGE_NAME.NOTICE}
        </Text>
      </ButtonItem>
      <ButtonItem campusColor={color} onClick={() => goDetailPage(`/bus`, 3)}>
        <BusIcon
          className={activeNav === 3 ? 'icon_style icon_active' : 'icon_style'}
        />
        <Text className={activeNav === 3 ? 'text_active' : null}>
          {PAGE_NAME.BUS}
        </Text>
      </ButtonItem>
      <ButtonItem campusColor={color} onClick={() => goDetailPage(`/menu`, 4)}>
        <RestaurantIcon
          className={activeNav === 4 ? 'icon_style icon_active' : 'icon_style'}
        />
        <Text className={activeNav === 4 ? 'text_active' : null}>
          {PAGE_NAME.MENU}
        </Text>
      </ButtonItem>
      <ButtonItem campusColor={color} onClick={() => goDetailPage(`/calendar`, 5)}>
        <CalendarIcon
          className={activeNav === 5 ? 'icon_style icon_active' : 'icon_style'}
        />
        <Text className={activeNav === 5 ? 'text_active' : null}>
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

  padding: ${(props) => props.isAndroid ? '12px 16px 12px 16px' : '12px 16px 28px 16px'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  border-top: 0.5px solid ${!isDarkMode() ? colors.GRAY100 : colors.GRAY650};
  background-color: ${!isDarkMode() ? colors.WHITE : colors.DARK_GRAY};
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
    fill: ${(props) => props.campusColor};
  }

  .text_active {
    color: ${(props) => props.campusColor};
  }
`;

// 글자
const Text = styled.div`
  color: ${!isDarkMode() ? colors.GRAY350 : colors.GRAY100};
  font-size: 1.2rem;
  font-weight: 600;
`;
