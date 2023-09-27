import React from 'react'
import styled from 'styled-components'
import {ReactComponent as HomeIcon} from "assets/icon/home_black_24dp.svg"
import {ReactComponent as BusIcon} from "assets/icon/directions_bus_black_24dp.svg"
import {ReactComponent as AssignmentIcon} from "assets/icon/assignment_black_24dp.svg"
import {ReactComponent as CalendarIcon} from "assets/icon/calendar_today_black_24dp.svg"
import {ReactComponent as RestaurantIcon} from "assets/icon/restaurant_black_24dp.svg"

export default function BottomNav() {
  return (
    <Wrapper>
      <ButtonItem>
        <HomeIcon className='icon_style' />
        <Text>메인</Text>
      </ButtonItem>
      <ButtonItem>
        <BusIcon className='icon_style' />
        <Text>버스</Text>
      </ButtonItem>
      <ButtonItem>
        <AssignmentIcon className='icon_style'/>
        <Text>공지사항</Text>
      </ButtonItem> 
      <ButtonItem>
        <CalendarIcon className='icon_style'/>
        <Text>학사일정</Text>
      </ButtonItem>
      <ButtonItem>
        <RestaurantIcon className='icon_style'/>
        <Text>식단</Text>
      </ButtonItem>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: orange;
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

`
const ButtonItem = styled.div`
  background-color: skyblue;
  height: 100%;
  width: 58px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon_style { 
    width: 20px;
    height: 20px;
    margin-bottom: 4px;
  }
`
const Text = styled.div`
`