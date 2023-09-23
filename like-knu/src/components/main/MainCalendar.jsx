import styled from "styled-components"
import CardContainer from "components/CardContainer"
import colors from "constants/colors"
import { useEffect, useState } from "react"
import { calendar } from "api/main"
export default function MainCalendar() {
  const [schedule, setSchedule] = useState([]);

  const getSchedule = async() => {
    const res = await calendar();
    setSchedule(res);
  }
  useEffect( () => {
    // getSchedule();
  },[]);
  return (
    <CardContainer>
      <Title>학사일정</Title>
      {
        schedule.map((s) => (
          <div key={s.scheduleId}>{s.scheduleContents}</div>
        ))
      }
    </CardContainer>
  )
}

const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
`
