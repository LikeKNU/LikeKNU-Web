import styled from "styled-components"
import CardContainer from "components/CardContainer"
import colors from "constants/colors"

export default function MainCalendar() {
  return (
    <CardContainer>
      <Title>학사일정</Title>
    </CardContainer>
  )
}

const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
`
