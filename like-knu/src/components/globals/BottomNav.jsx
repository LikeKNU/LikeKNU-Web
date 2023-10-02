import React, { useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as HomeIcon} from "assets/icon/home_black_24dp.svg"
import {ReactComponent as BusIcon} from "assets/icon/directions_bus_black_24dp.svg"
import {ReactComponent as AssignmentIcon} from "assets/icon/assignment_black_24dp.svg"
import {ReactComponent as CalendarIcon} from "assets/icon/calendar_today_black_24dp.svg"
import {ReactComponent as RestaurantIcon} from "assets/icon/restaurant_black_24dp.svg"
import colors from 'constants/colors'
import { Link } from 'react-router-dom'
import { getCampus } from "utils/DeviceManageUtil"
import Campus from 'constants/Campus'

export default function BottomNav() {
  const [activeNav, setActiveNav] = useState(1);
  let campus = Object.keys(Campus).find(key => Campus[key] === getCampus());
  return (
    <Wrapper>
      <ButtonItem>
        <StyledLink to={`/main/${campus}`}>
          <HomeIcon className='icon_style' fill={colors.gray350}/>
          <Text>메인</Text>
        </StyledLink>
      </ButtonItem>
      <ButtonItem>
        <StyledLink to={`/bus`}>
          <BusIcon className='icon_style' fill={colors.gray350}/>
          <Text>버스</Text>
        </StyledLink>
      </ButtonItem>
      <ButtonItem>
        <StyledLink to={`/notice`}>
          <AssignmentIcon className='icon_style' fill={colors.gray350}/>
          <Text>공지사항</Text>
        </StyledLink> 
      </ButtonItem>
      <ButtonItem>
        <StyledLink to={`/calendar`}>
          <CalendarIcon className='icon_style' fill={colors.gray350}/>
          <Text>학사일정</Text>
        </StyledLink>
      </ButtonItem>
      <ButtonItem>
        <StyledLink to={`/menu`}>
          <RestaurantIcon className='icon_style' fill={colors.gray350}/>
          <Text>식단</Text>
        </StyledLink>
      </ButtonItem>

    </Wrapper>
  )
}

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
const ButtonItem = styled.div`
  height: 100%;
  width: 58px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Text = styled.div`
  color: ${colors.gray350};
  font-size: 1.2rem;
`

const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
  
  // 아이콘 크기 조절
  .icon_style { 
    width: 22px;
    height: 22px;
    margin-bottom: 4px;
  }
`