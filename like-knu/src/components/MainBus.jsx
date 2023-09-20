import styled from "styled-components"
import CardContainer from "./CardContainer"
import colors from "constants/colors"

export default function MainBus() {
  return (
    <BusContainer>
      <Title>버스</Title>
    </BusContainer>
  )
}

const BusContainer = styled(CardContainer)`
  grid-column: 1 / 3;
`
const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
`