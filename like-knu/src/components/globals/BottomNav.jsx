import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ReactComponent as HomeIcon} from "assets/icon/home_black_24dp.svg"
import {ReactComponent as BusIcon} from "assets/icon/directions_bus_black_24dp.svg"
import {ReactComponent as AssignmentIcon} from "assets/icon/assignment_black_24dp.svg"
import {ReactComponent as CalendarIcon} from "assets/icon/calendar_today_black_24dp.svg"
import {ReactComponent as RestaurantIcon} from "assets/icon/restaurant_black_24dp.svg"
import colors from 'constants/colors'
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import {getCampus} from "utils/DeviceManageUtil"
import Campus from 'constants/Campus'

export default function BottomNav() {
  const [activeNav, setActiveNav] = useState(1);
  let campus = Object.keys(Campus).find(key => Campus[key] === getCampus());
  let pathName = useLocation().pathname;
  const navigate = useNavigate();
  const goDetailPage = (url, value) => {
    if(activeNav !== 1) {
      navigate(url);
      setActiveNav(value);
    }
  }
  useEffect(() => {
    if (pathName.includes('/notice')) {
      setActiveNav(2);
    } else if (pathName.includes('/bus')) {
      setActiveNav(3);
    } else if (pathName.includes('/menu')) {
      setActiveNav(4);
    } else if (pathName.includes('/calendar')) {
      setActiveNav(5);
    }
  }, [pathName]);

  return (
    <Wrapper>
      <ButtonItem onClick={() => goDetailPage(`/main/${campus}`, 1)}>
        <HomeIcon className={activeNav === 1 ? "icon_style icon_active" : "icon_style"}/>
        <Text className={activeNav === 1 ? "text_active" : null}>메인</Text>
      </ButtonItem>
      <ButtonItem onClick={() => goDetailPage(`/notice`, 2)}>
        <AssignmentIcon className={activeNav === 2 ? "icon_style icon_active" : "icon_style"}/>
        <Text className={activeNav === 2 ? "text_active" : null}>공지사항</Text>
      </ButtonItem>
      <ButtonItem onClick={() => goDetailPage(`/bus`, 3)}>
        <BusIcon className={activeNav === 3 ? "icon_style icon_active" : "icon_style"}/>
        <Text className={activeNav === 3 ? "text_active" : null}>버스</Text>
      </ButtonItem>
      <ButtonItem onClick={() => goDetailPage(`/menu`, 4)}>
        <RestaurantIcon className={activeNav === 4 ? "icon_style icon_active" : "icon_style"}/>
        <Text className={activeNav === 4 ? "text_active" : null}>식단</Text>
      </ButtonItem>
      <ButtonItem onClick={() => goDetailPage(`/calendar`, 5)}>
        <CalendarIcon className={activeNav === 5 ? "icon_style icon_active" : "icon_style"}/>
        <Text className={activeNav === 5 ? "text_active" : null}>학사일정</Text>
      </ButtonItem>
    </Wrapper>
  )
}

// nav 전체
const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 72px;
  z-index: 10;
  padding: 16px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  border-top: 1px solid ${colors.gray100};
  background-color: ${colors.white};
`

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
    fill: ${colors.gray350};
  }

  .icon_active {
    fill: ${colors.common};
  }

  .text_active {
    color: ${colors.common};
  }
`

// 글자
const Text = styled.div`
  color: ${colors.gray350};
  font-size: 1.2rem;
  font-weight: 600;
`
// 링크
const StyledLink = styled(Link)`
  display: inline-block;

`