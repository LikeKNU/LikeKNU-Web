import styled from "styled-components";
import colors from "../../constants/colors";

export default function CalendarListItem({scheduleContent}) {
  return (
    <Wrapper>
      {
        scheduleContent.map((s, index) => (
          <Content key={index}>
            <Date>{s["scheduleDate"]}</Date>
            <Text>{s.scheduleContents}</Text>
          </Content>
        ))
      }

    </Wrapper>
  )
}
const Wrapper = styled.div``
const Content = styled.div`
  margin-bottom: 15px;
`
const Date = styled.div`
  color: ${colors.gray350};
  font-size: 1.4rem;
  margin-bottom: 4px;
`
const Text = styled.div`
  color: ${colors.black};
  font-size: 1.6rem;
`