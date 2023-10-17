import styled from "styled-components";
import colors from "constants/colors";

export default function MainCalendarItem(props) {
  const {schedule} = props;
  const isToday = schedule.today;
  return (
    <div>
      <Title>
        <DateText>{schedule.scheduleDate}</DateText>
        {/* {
          isToday && <TodayText>오늘</TodayText>
        } */}
      </Title>
      <Content>
        {schedule.scheduleContents}
      </Content>
    </div>
  )
}

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  margin-bottom: 2px;
`
const DateText = styled.div`
  color: ${colors.black};
  font-weight: 600;
`
const TodayText = styled.div`
  color: ${colors.gray300};
`

const Content = styled.div`
  color: ${colors.black};
  font-size: 1.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 117px;
  white-space: nowrap;
`