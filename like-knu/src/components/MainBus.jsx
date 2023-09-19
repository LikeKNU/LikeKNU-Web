import styled from "styled-components"
import CardContainer from "./CardContainer"

export default function MainBus() {
  return (
    <BusContainer>
      Bus
    </BusContainer>
  )
}

const BusContainer = styled(CardContainer)`
  grid-column: 1 / 3;

`