import styled from "styled-components";
import colors from "constants/colors";

export default function MainCalendarItem(props) {
  const {schedule} = props;
  const isToday = true;
  return (
    <div>
      <Title>
        <DateText>9/10 (수)</DateText>
        {
          isToday && <TodayText>오늘</TodayText>
        }
      </Title>
      <Content>
        2학기 수강신청 변경 기간
      </Content>
    </div>
  )
}

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
`
const DateText = styled.div`
  color: ${colors.black};
`
const TodayText = styled.div`
  color: ${colors.gray300};
`

const Content = styled.div`
  font-size: 1.2rem;

`