import styled from "styled-components"
import CardContainer from "components/CardContainer"
import colors from "constants/colors"
import { bus } from "api/main"
import { useState, useEffect } from "react"

export default function MainBus() {
  const [buses, setBuses] = useState([]);


  const getBuses = async() => {
    const res = await bus();
    setBuses(res);
  }
  useEffect( () => {
    getBuses();
  },[]);
  return (
    <BusContainer>
      <Title>버스</Title>
      {
        buses.map((bus) => (
          <div key={bus.routeId} bus={bus}>{bus.busNumber}</div>
        ))
      }
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