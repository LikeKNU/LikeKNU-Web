import styled from "styled-components"
import CardContainer from "components/CardContainer"
import colors from "constants/colors"
import { useEffect, useState } from "react"
import { calendar } from "api/main"
import MainCalendarItem from "./MainCalendarItem"

export default function MainCalendar() {
  const [scheduleList, setScheduleList] = useState([]);

  const getSchedule = async() => {
    const res = await calendar();
    setScheduleList(res);
  }
  useEffect( () => {
    getSchedule();
  },[]);
  return (
    <CardContainer>
      <Title>학사일정</Title>
      {/* {
        scheduleList.map((schedule) => (
          <MainCalendarItem key={schedule.scheduleId} schedule={schedule}/>
        ))
      } */}
      {/* <CalendarList>
        <MainCalendarItem></MainCalendarItem>
      </CalendarList> */}
      <CalendarList>
        {
          scheduleList.map((schedule) => (
            <MainCalendarItem key={schedule.scheduleId} schedule={schedule}/>
          ))
        }
      </CalendarList>
    </CardContainer>
  )
}

const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
`
const CalendarList = styled.div`
  height: 172px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 1.2rem;
`
